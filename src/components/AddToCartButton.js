import style from "./css/AddToCartButton.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const AddToCartButton = (props) => {
  const { product } = props
  const { addToCart } = useContext(CartContext);

  return (
    <div className="AddToCartButton" onClick={() => addToCart(product)}>
      <button className={style.addButton}>Add To Cart</button>
    </div>
  );
};

export default AddToCartButton;
