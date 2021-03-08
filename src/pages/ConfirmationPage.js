import styles from "./css/Confirmed.module.css";
import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const ConfirmationPage = () => {
  const { purchased } = useContext(CartContext);
  const history = useHistory();

  return (
    <div className="center-align">
      <div className={styles.title}>
        <h4>Great! Enjoy your new-to-you car</h4>
      </div>

      <input type="checkbox" checked="checked" />
      <span>Purchase confirmed</span>
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
