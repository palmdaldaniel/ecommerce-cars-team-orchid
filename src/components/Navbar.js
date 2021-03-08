import React, { useContext, useState } from "react";
import { CartContext } from '../contexts/CartContext';
import { useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartItem from './CartItem.js';
import styles from "./css/Navbar.module.css";

function Navbar (props) {
	const [displayNavMenu, setDisplayNavMenu] = useState(false)
	const [displayCart, setDisplayCart] = useState(false)
	const { cart } = useContext(CartContext);
	const history = useHistory();

	let dropdownMenuNav
	if (displayNavMenu) {
		dropdownMenuNav = 
			<ul className={styles.navUL}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About us</NavLink>
			</ul>
	}

	let dropdownMenuCart 
	if (displayCart) {
		dropdownMenuCart = 
		<div className={styles.cartContent}>
				<p>Your cart</p>

				{cart.length > 0 && (
				<div className={styles.cartContainer}>
					{cart.map((product) => 
						<CartItem product={product}/>
					)}
				</div>)}
				{cart.length > 0 && (
				<div className={styles.goToCheckout}>
					<button className={styles.proceedButton} onClick={() => history.push('/checkout')} >Proceed</button>
				</div>)}
		</div>
	}

	return (
		<nav className={styles.navbarWrapper}>
			<div className={styles.navbar}>
				<FontAwesomeIcon 
					icon={faBars}
					onClick={() => setDisplayNavMenu(!displayNavMenu)}
				/>

				<div className={styles.centerLogo}>
					<img className={styles.navLogo}src="https://play-lh.googleusercontent.com/vVBVzNF6g2ri-I0t8YSAdSkQY8_Vjra3HFBkkWkhgVo8IjmxOOeLgRAZWn8_7PrnYcs" onClick={() => history.push('/')}></img>
				</div>
				
				<div className="cart" onClick={() => setDisplayCart(!displayCart)}>
					<FontAwesomeIcon 
						icon={faShoppingCart}
					/>

					{/* This will be a dynamic value once the methods are in place */}
					<span className={styles.cartNumber}>(0)</span>
				</div>	
			</div>

			{ dropdownMenuNav }
			{ dropdownMenuCart }

		</nav>
	)
}

export default Navbar;