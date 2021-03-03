import { container } from "./css/ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={container}>
      <img src={props.data.image} alt="" />
      <div>
        <h1>{props.data.make}</h1>
        <h4>{props.data.model}</h4>
        <p>{props.data.year}</p>
        <p>{props.data.miles} mil</p>
        <p>{props.data.city}</p>
        <p>{props.data.descShort}</p>
        <p>Price: {props.data.price} kr</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
