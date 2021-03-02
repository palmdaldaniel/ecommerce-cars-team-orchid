import styles from './css/Confirmed.module.css'
import React from 'react';
import { useHistory } from 'react-router-dom';

const ConfirmationPage = () => {
  const history = useHistory();

  return (
    <div class="center-align">
      <div className={styles.title}>
        <h4>Great! Enjoy your new-to-you car</h4>
      </div>

      <input type="checkbox" checked="checked" />
      <span>Purchase confirmed</span>

      <div>
        <button className={styles.button} onClick={() => history.push('/')}> Brows more cars </button>
      </div>
    </div>
  );
}

export default ConfirmationPage