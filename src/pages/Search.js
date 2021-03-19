import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";

import styles from "../components/css/ProductList.module.css";

const Search = () => {
  const { filteredProducts } = useContext(ProductsContext);
  return (
    <div className="Search" style={{ paddingTop: "60px" }}>
      <ProductList list={filteredProducts} />
    </div>
  );
};

export default Search;
