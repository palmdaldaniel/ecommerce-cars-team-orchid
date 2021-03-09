import { useEffect, useState } from 'react'
import styles from './css/CarouselItem.module.css'


const CarouselItem = (props) => {
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
			<div className={styles.slideContainer}>
				<div className={styles.textContainer}>
						<span className={styles.bold}>{props.data.make}</span>
						<span>{props.data.model}</span>
						<div className={styles.price}>
							{price}
						</div>
					</div>

				<img src={props.data.image} className={styles.image}/>
			</div>
	);
}

export default CarouselItem;
