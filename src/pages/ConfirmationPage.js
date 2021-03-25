import { React, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/Confirmed.module.css";

const ConfirmationPage = () => {
  const { purchased, purchasedValue, personalInformationSaved } = useContext(CartContext);
  const history = useHistory();
  const [formattedTotalValue, setFormattedTotalValue] = useState(null);

  // format price to local value
  useEffect(() => {
    if (purchasedValue) {
      setFormattedTotalValue(
        purchasedValue.toLocaleString(navigator.language, {
          style: "currency",
          currency: "SEK",
        })
      );
    }
  }, [purchasedValue]);

  return (
    <div className="center-align">
      <div className={styles.confirmationWrapper}>
        <FontAwesomeIcon icon={faCheck} className={styles.icon} />
        <h1>Your order is confirmed.</h1>
        <p>
          Thank you for shopping with us! Please print this page, it's your
          receipt.
        </p>
      </div>

      <div className={styles.informationWrapper}>
        <span className={styles.information} >
          <div>
            <h2>Your Information: </h2>
          </div>

          <div>
            <p>
              {`${personalInformationSaved.name} ${personalInformationSaved.lastname}`}
            </p>
            <p>
              {personalInformationSaved.address} <br />
              {`${personalInformationSaved.postalcode} `}
              {personalInformationSaved.city}
            </p>
            <p >
              {`${personalInformationSaved.email}`} <br />
              {`${personalInformationSaved.number}`}
            </p>
            <p>
              {personalInformationSaved.delivery} <br /> Payent method: Card
            </p>
          </div>
        </span>

        <span className={styles.information2}>
          <div>
            <h2>Our Information: </h2>
            <p>the Orchid Cars Inc.</p>
            <p>0549-323 232 <br/> Carsforhumanity@newcar.com </p>
            <p>Nevereverland road 66 <br/> 299 66 Peter An</p>
          </div>
        </span>
      </div>

      <div className={`container ${styles.purchasedContainer}`}>
        <h2>Your purchase:</h2>
        <hr/>

        <div className={styles.purchasedList}>
          {purchased &&
            purchased.map((car, i) => (
              <CartItem key={i} product={car} render={false}/>
            ))}
        </div>

        <div className={styles.showTotalContainer}>
          <h3 className={styles.showcost}>Total cost: {formattedTotalValue}</h3>
        </div>
        <hr/>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={() => window.print()}>
          Print receipt
        </button>
        <button className={styles.button} onClick={() => history.push("/")}>
          Browse for more cars
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;