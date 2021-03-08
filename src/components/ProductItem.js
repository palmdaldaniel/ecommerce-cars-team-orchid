import {
  productItemContainer,
  productInfo,
  firstInfo,
  priceContainer,
  description,
} from "./css/ProductItem.module.css";
import AddToCartButton from "../components/AddToCartButton.js";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();
  const handleClick = () => {
    const index = parseInt(props.id);
    history.push(`/product/${index}`);
  };

  return (
    <div className={productItemContainer}>
      <img src={props.data.image} alt={props.data.make} onClick={handleClick} />
      <div className={productInfo}>
        <div className={firstInfo} onClick={handleClick}>
          <h1>{props.data.make}</h1>
          <h5>{props.data.model}</h5>
        </div>
        <p className={description} onClick={handleClick}>
          {props.data.descShort}
        </p>
        <div className={priceContainer}>
          <span onClick={handleClick}>Price: {price}</span>
          <AddToCartButton product={props.data}/>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
