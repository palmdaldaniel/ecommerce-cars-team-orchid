import styles from './css/Confirmed.module.css'
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

const ConfirmationPage = () => {
  const history = useHistory();
  const { purchasedValue } = useContext(CartContext)
  const [formattedTotalValue, setFormattedTotalValue] = useState(null)

  // format to local value and display on screen
  useEffect(() => {
    if(purchasedValue) {
      setFormattedTotalValue(purchasedValue.toLocaleString(navigator.language, {style: 'currency',currency: 'SEK'}))
    }

  }, [purchasedValue])
  return (
    <div className="center-align">
      <div className={styles.title}>
        <h4>Great! Enjoy your new-to-you car</h4>
      </div>

      <input type="checkbox" checked="checked" />
      <span>Purchase confirmed</span>
      <div className='totalValue container'>
        <div className='row'>
          <div className='col s12'>
        <h5> Total value </h5>
        </div>
        <div className='col s12'>
        <h6>{formattedTotalValue}</h6>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => history.push('/')}> Browse for more cars </button>
      </div>
    </div>
  );
}

export default ConfirmationPage