import style from "./css/AddToCartButton.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const AddToCartButton = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="AddToCartButton" onClick={addToCart}>
      <button className={style}>Add To Cart</button>
    </div>
  );
};

export default AddToCartButton;
