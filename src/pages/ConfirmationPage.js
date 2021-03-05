import styles from './css/Confirmed.module.css'
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ConfirmationPage = () => {
  const history = useHistory();

  const { cart, purchasedValue, handlePurchase } = useContext(CartContext);

  return (
    <div className="center-align">
      <div className={styles.title}>
        <h4>Great! Enjoy your new-to-you car</h4>
      </div>

      <p>{purchasedValue}</p>

      <input type="checkbox" checked="checked" />
      <span>Purchase confirmed</span>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => history.push('/')}> Browse for more cars </button>
      </div>
    </div>
  );
}

export default ConfirmationPage