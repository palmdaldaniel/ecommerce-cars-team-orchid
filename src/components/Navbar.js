import React, { useContext, useState, useEffect } from "react";
import { CartContext } from '../contexts/CartContext';
import { useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faShoppingCart, faEllipsisH, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import CartItem from './CartItem.js';
import styles from "./css/Navbar.module.css";

function Navbar (props) {
	const [displayNavMenu, setDisplayNavMenu] = useState(false)
	const [displayCart, setDisplayCart] = useState(false)
	const [displayUserMenu, setDisplayUserMenu] = useState(false)
	const { cart, cartValue } = useContext(CartContext);
	const history = useHistory();const [valueStr, setPriceString] = useState("");

	//Function for total cost in nav-cart 
    useEffect(() => {
        if (typeof cartValue === "number") {
            setPriceString((cartValue).toLocaleString(navigator.language, {style: 'currency', currency: 'SEK'}));
        }
	}, [cartValue]);
	const maxCartItems = 4;

	//toggle user menu
	function toggleUserMenu () {
		setDisplayUserMenu(!displayUserMenu)
		setDisplayCart(false)
		setDisplayNavMenu(false)
	}

	//toggle hamburger menu, could be refactored into one single function with the other toggle function?
	function toggleNavMenu() {
		setDisplayNavMenu(!displayNavMenu)
		setDisplayCart(false)
		setDisplayUserMenu(false)
	}

	//toggle cart menu, could be refactored into one single function with the other toggle function?
	function toggleCartMenu() {
		setDisplayCart(!displayCart)
		setDisplayNavMenu(false)
		setDisplayUserMenu(false)
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

	return (
		<nav className={styles.navbarWrapper}>
			<div className={styles.navbar}>
				<FontAwesomeIcon 
					className={styles.hamburgerMenu}
					icon={faBars} 
					onClick={toggleNavMenu}
				/>

				<div className={styles.desktopLinks}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About us</NavLink>
				</div>

				<div className={styles.centerLogo}>
					<img 
						className={styles.navLogo} 
						src="/OC-logo.jpg" 
						onClick={() => history.push('/')}
					/>
				</div>

				<div className={styles.userContainer} onClick={toggleUserMenu}>
					<FontAwesomeIcon icon={faUser}/>
				</div>
				
				<div className={styles.cartContainer} onClick={toggleCartMenu}>
					<FontAwesomeIcon icon={faShoppingCart} className={styles.shoppingCart}/>
					<span className={styles.cartNumber}>{cart.length}</span>
				</div>
			</div>

			{ displayNavMenu &&
			<ul className={styles.navUL}>
				<NavLink className={styles.a} onClick={() => closeMenu()} to="/">Home</NavLink>
				<NavLink className={styles.a}  onClick={() => closeMenu()} to="/about">About us</NavLink>
			</ul>}

			{ displayUserMenu && 
			<div>hej</div>
			}

			{ displayCart &&
			<div className={styles.cartContent}>
				<p className={styles.cartHeadline}>Shopping cart</p>
				
				{!cart.length && (
					<p>Nothing here right now</p>
				)}

				{cart.length > 0 && (
					<div className={styles.cartContainer}>
						{ cart.slice(0, maxCartItems).map((product, i) => 
							<div key={i} className={styles.cartItem}>
								<CartItem product={product}/>
							</div>
						)}
						{ cart.length > maxCartItems && (
							<div className={styles.moreItems}>
								<FontAwesomeIcon icon={faEllipsisH} size="2x" />
								<p>{cart.length - maxCartItems} more item(s) in checkout</p>
							</div>
						)}
						<hr />
						<p className={styles.cartTotal}>{valueStr}</p>
					</div>
				)}

				{cart.length > 0 && (
					<button
						className={styles.proceedButton}
						onClick={(e) => proceedToCheckOut(e)}
					>To checkout <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
				)}
			</div>}
		</nav>
	)
}

export default Navbar;