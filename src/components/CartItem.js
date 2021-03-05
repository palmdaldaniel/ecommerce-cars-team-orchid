import styles from './css/CartItem.module.css'

const CartItem = (props) => {
console.log(props.product.make);
	return (
		<div className={styles.cartContainer}>
			<h1>Your car(t)</h1>
			
			<div className={styles.itemContainer}>
				<h2>{props.product.make}</h2>
				<p>{props.product.year}</p>
				<img className={styles.carImg} src={props.product.image}></img>
				<p>Model: {props.product.model}</p>
				<p>City: {props.product.city}</p>
				<p className={styles.price}>{props.product.price}</p>
			</div>
		</div>
	);
}

export default CartItem;
