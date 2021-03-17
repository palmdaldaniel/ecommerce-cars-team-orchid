import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem.js";
import style from "./css/Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Form.js";

function Checkout() {
  const { cart, cartValue, deleteCartItem } = useContext(CartContext);

  const history = useHistory();
  const [valueStr, setPriceString] = useState("");

  useEffect(() => {
    if (typeof cartValue === "number") {
      setPriceString(
        cartValue.toLocaleString(navigator.language, {
          style: "currency",
          currency: "SEK",
        })
      );
    }
  }, [cartValue]);

  // returns jsx with form and purchasebutton when cart.length > 0
  const loadCart = () => {
    return (
      <div className={style.checkoutContainer}>
        <div className="container">
          <h1 className={style.pageTitle}>Shopping Cart</h1>
          <hr />
          <div className={style.cartList}>
            {cart.map((product, i) => (
              <div key={i} className={style.productRow}>
                <CartItem product={product} />
                <div
                  className="valign-wrapper"
                  onClick={() => deleteCartItem(i)}
                >
                  <button className={style.deleteBtn}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            ))}
            <p className={style.totalCost}>{valueStr}</p>
          </div>
          <hr />
        </div>
        <Form />
      </div>
    );
  };

  return (
    <>
      {cart && cart.length > 0 ? (
        loadCart()
      ) : (
        <div className={style.emptyCart}>
          <h4>Your cart is empty</h4>
          <button onClick={() => history.push("/")} className={style.Btn}>
            Browse for cars
          </button>
        </div>
      )}
    </>
  );
}
export default Checkout;
