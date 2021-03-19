import style from "./css/AddToCartButton.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const AddToCartButton = (props) => {
  const { product } = props;
  const { addToCart, cart } = useContext(CartContext);

  const checkCart = (product) => {
    return cart.find((getVin) => {
      return getVin.vin === product.vin;
    });
  };

  return (
    <div>
      {!checkCart(product) ? (
        <div onClick={() => addToCart(product)}>
          <button className={style.addButton}>Add To Cart</button>
        </div>
      ) : (
        <button className={style.inCart}>In cart</button>
      )}
    </div>
  );
};

export default AddToCartButton;
