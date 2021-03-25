import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import UserMenu from "./UserMenu.js";
import style from "../pages/css/Checkout.module.css";

const Form = () => {  
  const history = useHistory();
  const { handlePurchase } = useContext(CartContext);
  const { getInformation } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddress] = useState();
  const [postalcode, setPostalcode] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [delivery, setDelivery] = useState("Delivery: Pickup at store");

  const onPurchase = () => {
    handlePurchase();
    history.push("/confirmed");
  };

  const login = () => {
    return (
      <div>
        <UserMenu />
      </div>
    );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
 
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  
  const handlePostalcode = (e) => {
    setPostalcode(e.target.value);
  };
 
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleDelivery = (e) => {
    setDelivery("Delivery: Deliver to home");
  };

  useEffect(() => {
    getInformation(name, lastname, address, postalcode, city, email, number, delivery) 
  },[name, lastname, address, postalcode, city, email, number, delivery])
  
  return (
    <>
      {currentUser ? (
        <div className={`input-field`}>
          <form className={style.contactForm}  onSubmit={onPurchase}>
            <h2 className={style.formTitle}>Personal info</h2>
              <label className={style.label} htmlFor="name">
                <span className={style.titleInput}>Name</span>
                <input
                  className={style.inputField}
                  type="text"
                  name="name"
                  placeholder="First name"
                  required
                  onChange={handleNameChange}
                />
                <input type="text" placeholder="Last name" required onChange={handleLastname} />
              </label>

              <label className={style.label} htmlFor="address">
                <span className={style.titleInput}>Shipping Address</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  onChange={handleAddress}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Postal Code"
                  required
                  onChange={handlePostalcode}
                />
                <input type="text" name="address" placeholder="City" required onChange={handleCity}/>
              </label>

              <label className={style.label} htmlFor="contact">
                <span className={style.titleInput}>Contact details</span>
                <input type="text" name="contact" placeholder="Email" required onChange={handleEmail}/>
                <input
                  type="number"
                  name="contact"
                  placeholder="Phone Number"
                  required
                  onChange={handleNumber}
                />
              </label>

              <h2 className={style.formTitle}>Delivery options</h2>
              <div className={style.radioButtons}>
                <p>
                  <label >
                    <input name="group1" type="radio"/>
                    <span>Pick up at store</span>
                  </label>
                </p>
                <p>
                  <label >
                    <input name="group1" type="radio" onChange={handleDelivery}/>
                    <span>Get car delivered to home</span>
                  </label>
                </p>
              </div>
              
              <h2 className={style.formTitle}>Payment</h2>
              <label className={style.label} htmlFor="cardname">
                <span className={style.titleInput}>Name on card</span>
                <input type="text" name="cardname" placeholder="Full name"/>
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
                  required={true}
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

            <button type="submit" className={style.Btn}>Purchase</button> 
          </form>
        </div>
      ) : (
        login()
      )}
    </>
  )
};
    
export default Form;