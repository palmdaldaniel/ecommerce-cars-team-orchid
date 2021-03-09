import styles from "./css/Confirmed.module.css";
import { React, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
      <div className={styles.confirmationWrapper}>
        <h1 className={styles.title}>Great! Enjoy your new-to-you car!</h1>

        <FontAwesomeIcon icon={faCheck} className={styles.icon} />
        <p>Your order is confirmed.</p>
        <p>Thank your shopping with us! Please print this page, this is your receipt.</p>
      </div>

      <div className={styles.showTotalContainer}>
        <h2 className={styles.totalcost}>Total cost:</h2>
        <h3 className={styles.showcost}>{formattedTotalValue}</h3>
      </div>
      
      <div className={`container ${styles.purchasedContainer}`}>
        {purchased.length < 2 && 
          <h3>Your new car:</h3>
        }

        {purchased.length >= 2 && 
          <h3>Your new cars:</h3>
        }

        <hr/>
        <div className={styles.purchasedList}>
          {/* map here but wait for purshased data to load first */}
          {purchased &&
            purchased.map((car, i) => <CartItem key={i} product={car} />)}
        </div>
        <hr />
      </div>

      
      <button className={styles.button} onClick={() => history.push("/")}>
        Browse for more cars
      </button>
      
    </div>
  );
};

export default ConfirmationPage;
