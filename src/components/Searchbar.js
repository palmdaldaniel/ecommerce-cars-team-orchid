import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './css/SearchBar.module.css'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
  const { searchForCars } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search.length < 2) return
    console.log(search);
    searchForCars(search)
    history.push('/search')
   
    setSearch("");
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchfield}>
          <input
            type="text"
            placeholder="Search make, model or city"
            value={search}
            onChange={handleInput}
          />
          <div className={styles.icon} onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;