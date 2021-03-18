import styles from "./css/ProductList.module.css";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "./ProductItem";

import Lazyload from 'react-lazyload';

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1 className={styles.headline}>Products</h1>
      <div className={styles.productList}>
        <div className={styles.productListContainer}>
          {products &&
            products.map((product, i) => (
              <Lazyload key={i}>
              <ProductItem key={i} id={i} data={product} />
              </Lazyload>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
