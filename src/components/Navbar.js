import { NavLink } from "react-router-dom";
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

import styles from "./css/Navbar.module.css";

function Navbar () {
	const [displayNavMenu, setDisplayNavMenu] = useState(false)
	const [displayCart, setDisplayCart] = useState(false)
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
	function proceedToCheckOut() {
			setDisplayCart(false)
			history.push('/checkout')
	}

	let dropdownMenuNav
	if (displayNavMenu) {
		dropdownMenuNav = 
			<ul className={styles.navUL}>
			<NavLink onClick={() => closeMenu()} to="/">Home</NavLink>
			<NavLink onClick={() => closeMenu()} to="/about">About us</NavLink>
			</ul>
	} 

	let dropdownMenuCart 
	if (displayCart) {
		dropdownMenuCart = 
		<div className={styles.cartContent}>
			<p>Your cart</p>
			<ul>

				<div className={styles.carItem}>
				{/* Will be replaced by component later */}
				<span>A car img</span>
				<span>A car title</span>
				<span>$$ car price</span>
				</div>

				<div className={styles.goToCheckout}>
					{/* Will be replaced by component later */}
					<p>$$ 12345</p>
				
					<button className={styles.proceedButton} 
					onClick={() => proceedToCheckOut()}>
					Proceed
					</button>
				</div>

			</ul>
		</div>
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