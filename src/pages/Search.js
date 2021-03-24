import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/Searchbar";
import styles from './css/SearchPage.module.css'
import Filters from '../components/Filter.js';

const Search = () => {
  const { searchedProducts, setSearch, setFilters } = useContext(ProductsContext);

  const removeFilters = () => {
    setSearch('')
    setFilters({
      make: "",
      model: "",
      year: "",
      min: "0",
      max: Infinity,
      minMiles: "0",
      maxMiles: Infinity,
      priceVal: "",
      milesVal: "",
      })
  }

  return (
    <div className="Search" style={{ paddingTop: '50px'}}>
      <SearchBar />
      <Filters/>

      <div className={styles.button}>
        <button onClick={removeFilters}>✖ Remove filters</button>
      </div>

      <div className={styles.headline}>
        <h5>Your search result</h5>
      </div>
      
      <ProductList list={searchedProducts} />
    </div>
  );
};

export default Search;
