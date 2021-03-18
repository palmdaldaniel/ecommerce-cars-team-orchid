import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "../components/ProductItem";

import styles from "../components/css/ProductList.module.css";

const Search = () => {
  const { products } = useContext(ProductsContext);
  return (
    
      <div className="Search" style={{paddingTop: '60px'}}>
        <h1 className={styles.headline}>Products</h1>
        <div className={styles.productList}>
          <div className={styles.productListContainer}>
            {products &&
              products.map((product, i) => (
                <ProductItem key={i} data={product} />
              ))}
          </div>
        </div>
      </div>
    
  );
};

export default Search;
