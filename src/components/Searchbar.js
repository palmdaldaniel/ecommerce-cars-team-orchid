import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/SearchBar.module.css";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch } = useContext(ProductsContext);
  const history = useHistory();
  const [searchMessage] = useState("Try searching for Chevrolet or Toyota");
  const [displaySearchMessage, setDisplaySearchMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (search.length < 2) {
      setDisplaySearchMessage(true);
      // hide helpmessage after 3 seconds
      setTimeout(hideMessage, 3000)
      return;
    }
    history.push("/search");
  };

  const hideMessage = () => {
    setDisplaySearchMessage(false);
  } 

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchfield}>
          <input
            id="input"
            type="text"
            placeholder="Search for brand, model or city"
            value={search}
            onChange={handleInput}
          />
          <div className={styles.icon} onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>

        {displaySearchMessage && (
          <div className={styles.message}>
            <ul>
              <li>{searchMessage}</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
