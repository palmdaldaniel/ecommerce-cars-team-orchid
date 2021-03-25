import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  productItemContainer,
  productInfo,
  firstInfo,
  priceContainer,
  secondInfo,
  productItemImage,
} from "./css/ProductItem.module.css";
import AddToCartButton from "../components/AddToCartButton.js";

const ProductItem = (props) => {
  const { vin } = props.data
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (props.data) {
      setPrice(
        props.data.price.toLocaleString(navigator.language, {
          style: "currency",
          currency: "SEK",
        })
      );
    }
  }, [props.data]);

  const history = useHistory();
  const handleClick = () => {
    history.push(`/product/${vin}`);
  };

  return (
    <div className={productItemContainer}>
      <div className={productItemImage}>
        <img src={props.data.image} alt={props.data.make} onClick={handleClick} />
      </div>

      <div className={productInfo}>
        <div className={firstInfo} onClick={handleClick}>
          <h1>{props.data.make}</h1>
          <h5>{props.data.model}</h5>
        </div>

        <div className={secondInfo} onClick={handleClick}>
          <p>{props.data.year} | {props.data.miles} mi | {props.data.city}</p>
        </div>

        <div className={priceContainer}>
          <span onClick={handleClick}>{price}</span>
          <AddToCartButton product={props.data}/>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;