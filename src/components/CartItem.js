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
    // <div className={styles.cartContainer}>
    <div className={styles.itemContainer}>
      <img className={styles.carImg} src={props.product.image}></img>
      <div className={styles.itemContent}>
        <p className={styles.title}>
          {props.product.make} {props.product.model}
        </p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
    // </div>
  );
};

export default CartItem;
