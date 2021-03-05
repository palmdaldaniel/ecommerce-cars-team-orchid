import {
  container,
  productInfo,
  firstInfo,
  priceContainer,
  description,
} from "./css/ProductItem.module.css";
import AddToCartButton from "../components/AddToCartButton.js";
import { useState, useEffect } from "react";

const ProductItem = (props) => {
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

  return (
    <div className={container}>
      <img src={props.data.image} alt={props.data.make} />
      <div className={productInfo}>
        <div className={firstInfo}>
          <h1>{props.data.make}</h1>
          <h5>{props.data.model}</h5>
        </div>
        <p className={description}>{props.data.descShort}</p>
        <div className={priceContainer}>
          <span>Price: {price}</span>
          <AddToCartButton product={props.data}/>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
