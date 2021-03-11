import styles from "./css/CartItem.module.css";
import { useState, useEffect } from "react";

const CartItem = (props) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (props.product) {
      setPrice(
        props.product.price.toLocaleString(navigator.language, {
          style: "currency",
          currency: "SEK",
        })
      );
    }
  }, [props.product]);

  return (
    <div className={styles.itemContainer}>
      <img className={styles.carImg} src={props.product.image}></img>
      <div className={styles.itemContent}>
        <div className={styles.title}>
          <p className={styles.make}>{props.product.make}</p>
          <p className={styles.model}>{props.product.model}</p>
        </div>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
