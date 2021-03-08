import styles from "./css/Confirmed.module.css";
import { React, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const ConfirmationPage = () => {
  const { purchased, purchasedValue } = useContext(CartContext);
  const history = useHistory();
  const [formattedTotalValue, setFormattedTotalValue] = useState(null);

  // format to local value and display on screen
  useEffect(() => {
    if(purchasedValue) {
      setFormattedTotalValue(purchasedValue.toLocaleString(
        navigator.language, {
          style: 'currency',
          currency: 'SEK'}))
    }
  }, [purchasedValue])

  return (
    <div className="center-align">
      <div className={styles.title}>
        <h1>Great! Enjoy your new-to-you car</h1>
      </div>

      <input type="checkbox" checked="checked" />
      <span>Purchase confirmed</span>

      <div className={styles.showTotalContainer}>
        <h2 className={styles.totalcost}>Total cost:</h2>
        <p className={styles.showcost}>{formattedTotalValue}</p>
      </div>
         
      <div className="container">
        {/* map here but wait for purshased data to load first */}
        {purchased &&
          purchased.map((car, i) => <CartItem key={i} product={car} />)}
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => history.push("/")}>
          Browse for more cars
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
