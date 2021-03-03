import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

import styles from './css/CartItem.module.css'

const CartItem = () => {
	const { cart } = useContext(CartContext);


	return (
		<div className={styles.itemContainer}>
			<h1>Your car(t)</h1>
			<p>{cart.make}</p>
			<img className={styles.carImg} src={cart.img}></img>
			<p>{cart.make}</p>
			<p>{cart.model}</p>
			<p>{cart.price}</p>
		</div>
	);
}

export default CartItem;
