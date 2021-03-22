import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/Searchbar";
import styles from './css/SearchPage.module.css'
import Filters from '../components/Filter.js';

const Search = () => {
  const { searchedProducts } = useContext(ProductsContext);
  return (
    <div className="Search" style={{ paddingTop: "100px" }}>
      <SearchBar />
      <Filters/>
      <div className={styles.headline}>
        <h5>Your search result</h5>
      </div>
      <ProductList list={searchedProducts} />
    </div>
  );
};

export default Search;
