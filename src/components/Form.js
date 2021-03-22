import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import style from "../pages/css/Checkout.module.css";
import UserMenu from "./UserMenu.js";
import { UserContext } from "../contexts/UserContext";


const Form = () => {
  const history = useHistory();
  const { handlePurchase } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

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
  
  const { getInformation } = useContext(CartContext);

  const [name, setName] = useState();
  const handleNameChange = (e) => {
    const personal = {...name}
    setName(e.target.value);
  };
  const [lastname, setLastname] = useState();
  const handleLastname = (e) => {
    const personal = {...lastname}
    setLastname(e.target.value);
  };
  const [address, setAddress] = useState();
  const handleAddress = (e) => {
    const personal = {...address}
    setAddress(e.target.value);
  };
  const [postalcode, setPostalcode] = useState();
  const handlePostalcode = (e) => {
    const personal = {...postalcode}
    setPostalcode(e.target.value);
  };
  const [city, setCity] = useState();
  const handleCity = (e) => {
    const personal = {...city}
    setCity(e.target.value);
  };
  const [email, setEmail] = useState();
  const handleEmail = (e) => {
    const personal = {...email}
    setEmail(e.target.value);
  };
  const [number, setNumber] = useState();
  const handleNumber = (e) => {
    const personal = {...number}
    setNumber(e.target.value);
  };


  // Dessa funkar inte för detta! Informationen borde finnas med men
  // det måste vara antingen eller. Trycker man i båda två så kommer båda med.
  const [pickup, setPickup] = useState();
  const handlePickup = (e) => {
    const personal = {...pickup}
    setPickup("Delivery option: Pick up");
  };
  const [delivery, setDelivery] = useState();
  const handleDelivery = (e) => {
    const personal = {...delivery}
    setDelivery("Delivery option: Delivered to home");
  };




  // const [delivery, setDelivery] = useState();
  //   if (group1 === checked) {
  //     const handlePickup = (e) => {
  //       const personal = {...pickup}
  //       setNumber("Pick up at store");
  //     };
  //   }
  //   else{
  //     const handleDelivery = (e) => {
  //       const personal = {...delivery}
  //       setDelivery("Deliver car to home");
  //     };
  //   }


  useEffect(() => {
    getInformation(name, lastname, address,  postalcode, city, email, number, pickup, delivery) 
  },[name, lastname, address, postalcode, city, email, number, pickup, delivery])

  
  return (
    <>
      {currentUser ? (
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
                onChange={handleNameChange}

              />
              <input type="text" placeholder="Last name" required onChange={handleLastname}/>
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
                id="postalcode"
              />
              <input type="text" name="address" placeholder="City" required onChange={handleCity} />
            </label>
            <label className={style.label} htmlFor="contact">
              <span className={style.titleInput}>Contact details</span>
              <input type="text" name="contact" placeholder="Email" required onChange={handleEmail} />
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
                <label>
                  <input name="group1" type="radio" onChange={handlePickup}/>
                  <span>Pick up at store</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" onChange={handleDelivery} />
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
      ) : (
        login()
      )}
    </>
  );
};

export default Form;
