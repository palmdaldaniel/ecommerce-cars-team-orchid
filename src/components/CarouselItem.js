import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./css/CarouselItem.module.css";

const CarouselItem = (props) => {
	// destructuring for better readability
  const { vin } = props.data;

  const [price, setPrice] = useState(null);
  const history = useHistory();

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

  const handleClick = () => {
    history.push(`/product/${vin}`);
  };

  return (
    <div className={styles.slideContainer}>
      <div className={styles.imageContainer} onClick={handleClick}>
        <img src={props.data.image} className={styles.image} />
        <div className={styles.textContainer}>
          <span className={styles.bold}>{props.data.make}</span>
          <span>{props.data.model}</span>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
