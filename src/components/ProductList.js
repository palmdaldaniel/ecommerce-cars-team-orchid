import styles from "./css/ProductList.module.css";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1 className={styles.headline}>Products</h1>
      <div className={styles.productList}>
        <div className={styles.productListContainer}>
          {products &&
            products.map((product, i) => (
              <ProductItem key={i} /* id={i} */ data={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
