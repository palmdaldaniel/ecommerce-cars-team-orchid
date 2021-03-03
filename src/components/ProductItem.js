import {
  container,
  productInfo,
  firstInfo,
  price,
  description,
} from "./css/ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={container}>
      <img src={props.data.image} alt="" />
      <div className={productInfo}>
        <div className={firstInfo}>
          <h1>{props.data.make}</h1>
          <h5>{props.data.model}</h5>
        </div>
        <p className={description}>{props.data.descShort}</p>
        <div className={price}>
          <span>Price: {props.data.price} kr</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
