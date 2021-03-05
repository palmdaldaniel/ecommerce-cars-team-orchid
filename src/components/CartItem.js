import styles from './css/CartItem.module.css'

const CartItem = (props) => {

	return (
		// <div className={styles.cartContainer}>
			<div className={styles.itemContainer}>
				<img className={styles.carImg} src={props.product.image}></img>
				<div className={styles.itemContent}>
					<p className={styles.title}>{props.product.make} {props.product.model}</p>
					<p className={styles.price}>{props.product.price}</p>
				</div>
			</div>
		// </div>
	);
}

export default CartItem;
