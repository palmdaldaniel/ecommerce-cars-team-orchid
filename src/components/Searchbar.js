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
  const [searchMessage, setSearchMessage] = useState('Try searching for Chevrolet or Toyota')
  const [displaSearchMessage, setDisplaySearchMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // send helpmessage to productscontext
    /* searchForCars('', '', 'Try searching for Chevrolet or Toyota') */
    if(search.length < 2)  {
      setDisplaySearchMessage(true)
      return
    }
    
    searchForCars(search)
    setDisplaySearchMessage(false)
    history.push('/search')
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchfield}>
          <input
            type="text"
            placeholder="Search for make, model or city"
            value={search}
            onChange={handleInput}
          />
          <div className={styles.icon} onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>

        {displaSearchMessage &&   <div className="searchMessage">
        <p>{searchMessage}</p>
        </div>  }
  
      </form>
    </div>
  );
};

export default SearchBar;