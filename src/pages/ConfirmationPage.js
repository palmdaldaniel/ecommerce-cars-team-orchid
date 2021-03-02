import styles from './css/Confirmed.module.css'

const ConfirmationPage = () => {
  return (
    <div class="center-align">
      <div className={styles.title}>
      <h4>Great! Enjoy your new-to-you car</h4>
      </div>

      <input type="checkbox" checked="checked" />
      <span>Purchase confirmed</span>

    </div>
  );
}

export default ConfirmationPage