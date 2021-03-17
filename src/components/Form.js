import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import style from "../pages/css/Checkout.module.css";

const Form = () => {
  const history = useHistory();
  const { handlePurchase, cart } = useContext(CartContext);

  const onPurchase = () => {
    handlePurchase();
    history.push("/confirmed");
  };

  const login = () => {
    return (
      <div>
        <h1>You must log in first</h1>
      </div>
    );
  };

  return (
    <>
      {cart && cart.length > 1 ? (
        login()
      ) : (
        <div>
          <form className={style.contactForm}>
            <h2 className={style.formTitle}>Personal info</h2>
            <label className={style.label} htmlFor="name">
              <span className={style.titleInput}>Name</span>
              <input
                className={style.inputField}
                type="text"
                name="name"
                placeholder="First name"
                required
              />
              <input type="text" placeholder="Last name" required />
            </label>
            <label className={style.label} htmlFor="address">
              <span className={style.titleInput}>Shipping Address</span>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Postal Code"
                required
              />
              <input type="text" name="address" placeholder="City" required />
            </label>
            <label className={style.label} htmlFor="contact">
              <span className={style.titleInput}>Contact details</span>
              <input type="text" name="contact" placeholder="Email" required />
              <input
                type="number"
                name="contact"
                placeholder="Phone Number"
                required
              />
            </label>
            <h2 className={style.formTitle}>Delivery options</h2>
            <div className={style.radioButtons}>
              <p>
                <label>
                  <input name="group1" type="radio" defaultChecked />
                  <span>Pick up at store</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  <span>Get car delivered to home</span>
                </label>
              </p>
            </div>
            <h2 className={style.formTitle}>Payment</h2>
            <label className={style.label} htmlFor="cardname">
              <span className={style.titleInput}>Name on card</span>
              <input type="text" name="cardname" placeholder="Full name" />
            </label>
            <label className={style.label} htmlFor="cardnumber">
              <span className={style.titleInput}>Card Number</span>
              <input
                type="number"
                name="cardnumber"
                placeholder="Card number"
                required
              />
            </label>
            <label className={style.label} htmlFor="CVV">
              <span className={style.titleInput}>CVV</span>
              <input
                type="text"
                name="CVV"
                maxLength="3"
                placeholder="CVV"
                required
              />
            </label>
            <label className={style.label} htmlFor="expdate">
              <span className={style.titleInput}>Expiration Date</span>
              <div className={style.monthYearWrapper}>
                <input
                  type="number"
                  name="expdate"
                  placeholder="Month"
                  required
                />
                <input
                  type="number"
                  name="expdate"
                  placeholder="Year"
                  required
                />
              </div>
            </label>
          </form>

          <button className={style.Btn} onClick={onPurchase}>
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
