import styles from './css/Confirmed.module.css'

// import styles from './css'
const ConfirmationPage = () => {
  return (
    <div class="center-align">
      <div className={styles.title}>
      <h3>Great! Enjoy your new-to-you car</h3>
      </div>

      <input type="checkbox" checked="checked" />
      <span>Purchase confirmed</span>

    </div>
  );
}

export default ConfirmationPage