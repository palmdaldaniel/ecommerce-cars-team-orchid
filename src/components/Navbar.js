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


	//toggle hamburger menu, could be refactored into one single function with the other toggle function?
	function toggleNavMenu() {
		setDisplayNavMenu(!displayNavMenu)
		setDisplayCart(false)
	}

	//toggle cart menu, could be refactored into one single function with the other toggle function?
	function toggleCartMenu() {
		setDisplayCart(!displayCart)
		setDisplayNavMenu(false)
	}

	//closing the menu when user clicks on link in hamburger menu
	function closeMenu() {
		setDisplayNavMenu(false)
	}

	//closing the menu when user clicks on proceedbutton and redirects to checkout
	function proceedToCheckOut(e) {
		if (e.target.tagName === "BUTTON") {
			setDisplayCart(false)
			history.push('/checkout')
		}
	}

	let dropdownMenuNav
	if (displayNavMenu) {
		dropdownMenuNav = (
			<ul className={styles.navUL}>
				<NavLink onClick={() => closeMenu()} to="/">Home</NavLink>
				<NavLink onClick={() => closeMenu()} to="/about">About us</NavLink>
			</ul>
		);
	} 

	let dropdownMenuCart 
	if (displayCart) {
		dropdownMenuCart = (
			<div className={styles.cartContent}>
				<p className={styles.cartHeadline}>Your cart</p>

				{cart.length > 0 && (
					<div className={styles.cartContainer}>
						{cart.map((product) => 
							<div className={styles.cartItem}>
								<CartItem product={product}/>
							</div>
						)}
					</div>
				)}

				{cart.length > 0 && (
					<div className={styles.goToCheckout}>
						<button className={styles.proceedButton} onClick={(e) => proceedToCheckOut(e)}>Proceed</button>
					</div>
				)}
			</div>
		);
	}

	return (
		<nav className={styles.navbarWrapper}>
			<div className={styles.navbar}>
				<FontAwesomeIcon icon={faBars} onClick={toggleNavMenu}/>

				<div className={styles.centerLogo}>
					<img className={styles.navLogo}src="https://play-lh.googleusercontent.com/vVBVzNF6g2ri-I0t8YSAdSkQY8_Vjra3HFBkkWkhgVo8IjmxOOeLgRAZWn8_7PrnYcs" onClick={() => history.push('/')}></img>
				</div>
				
				<div className="cart" onClick={toggleCartMenu}>
					<FontAwesomeIcon icon={faShoppingCart}/>

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