import styles from "./css/CartItem.module.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  const [price, setPrice] = useState(null);
  const { deleteCartItem } = useContext(CartContext);

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
            <div>
              <p className={styles.make}>{props.product.make}</p>
              <p className={styles.model}>{props.product.model}</p>
            </div>
            {props.show ? (
              <div>
                <button
                  className={styles.delete}
                  onClick={() => deleteCartItem(props.delete)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <p className={styles.price}>{price}</p>
        </div>
    </div>
  );
};

export default CartItem;
