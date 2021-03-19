import Lazyload from 'react-lazyload';

import ProductItem from "./ProductItem";
import styles from "./css/ProductList.module.css";

const ProductList = (props) => {
  return (
    <div>
      <h1 className={styles.headline}>Products</h1>
      <div className={styles.productList}>
        <div className={styles.productListContainer}>
          {props.list &&
            props.list.map((product, i) => (
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
