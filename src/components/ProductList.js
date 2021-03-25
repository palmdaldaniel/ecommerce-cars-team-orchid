import Lazyload from 'react-lazyload';
import ProductItem from "./ProductItem";
import styles from "./css/ProductList.module.css";

const ProductList = (props) => {
  if(props.list && props.list.length === 0) {
    return <div className={styles.errorMessage}>No matching results.</div>
  }

  return (
    <div className={styles.productList}>
      <div className={styles.productListContainer}>
        {props.list &&
          props.list.map((product, i) => (
            <Lazyload key={i}>
              <ProductItem data={product}/>
            </Lazyload>
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;