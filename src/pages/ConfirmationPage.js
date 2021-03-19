import styles from "./css/Confirmed.module.css";
import { React, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ConfirmationPage = () => {
  const { purchased, purchasedValue } = useContext(CartContext);
  const history = useHistory();
  const [formattedTotalValue, setFormattedTotalValue] = useState(null);

  // format to local value and display on screen
  useEffect(() => {
    if (purchasedValue) {
      setFormattedTotalValue(
        purchasedValue.toLocaleString(navigator.language, {
          style: "currency",
          currency: "SEK",
        })
      );
    }
  }, [purchasedValue]);

  return (
    <div className="center-align">
      <div className={styles.confirmationWrapper}>

        <FontAwesomeIcon icon={faCheck} className={styles.icon} />
        <h1>Your order is confirmed.</h1>
        <p>
        Thank you for shopping with us! Please print this page, it's your
          receipt.
        </p>
      </div>

      <div className={`container ${styles.purchasedContainer}`}>
        <h2>Your purchase:</h2>
        <hr />

        <div className={styles.purchasedList}>
          {purchased &&
            purchased.map((car, i) => <CartItem key={i} product={car} />)}
        </div>

        <div className={styles.showTotalContainer}>
          <h3 className={styles.showcost}>Total cost: {formattedTotalValue}</h3>
        </div>
      <hr/>

      </div>
        

      <button className={styles.button} onClick={() => history.push("/")}>
        Browse for more cars
      </button>
    </div>
  );
};

export default ConfirmationPage;
