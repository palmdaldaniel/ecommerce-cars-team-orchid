import Lazyload from 'react-lazyload';
import ProductItem from "./ProductItem";
import styles from "./css/ProductList.module.css";

const ProductList = (props) => {
  return (
    <div>
      <div className={styles.productList}>
        <div className={styles.productListContainer}>
          {props.list &&
            props.list.length > 0 ? (
              props.list.map((product, i) => (
                <Lazyload key={i}>
                  <ProductItem key={i} id={i} data={product} />
                </Lazyload>
              ))
            ) : (
              <div className={styles.resultMessage}>No matching results.</div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProductList;
