import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/Searchbar";
import styles from './css/SearchPage.module.css'

const Search = () => {
  const { filteredProducts } = useContext(ProductsContext);
  return (
    <div className="Search" style={{ paddingTop: "100px" }}>
      <SearchBar />
        <div className={styles.headline}>
        <h5>Your search result</h5>
        </div>
      <ProductList list={filteredProducts} />
    </div>
  );
};

export default Search;
