import style from "./css/AddToCartButton.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const AddToCartButton = (props) => {
  const { product } = props;
  const { addToCart, cart } = useContext(CartContext);

  const isInCart = (product) => {
    return cart.find(p => p.vin === product.vin);
  };

  if (!isInCart(product)) {
    return <button className={`${style.addButton} ${style.inCart}`}>
      <FontAwesomeIcon icon={faCheck} /> In cart
    </button>
  } else {
    return <button className={style.addButton} onClick={() => addToCart(product)}>
      <FontAwesomeIcon icon={faPlus} /> Add To Cart
    </button>
  }
};

export default AddToCartButton;
