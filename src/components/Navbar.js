import { NavLink } from "react-router-dom";
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from "./css/Navbar.module.css";

function Navbar () {
	const [displayNavMenu, setDisplayNavMenu] = useState(false)
	const [displayCart, setDisplayCart] = useState(false)

	let dropdownMenuNav
	if (displayNavMenu) {
		dropdownMenuNav = 
			<ul>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About us</NavLink>
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

				<div class={styles.goToCheckout}>
				{/* Will be replaced by component later */}
				<p>$$ 12345</p>
				<button>Proceed</button>
				</div>

			</ul>
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
					<img src="https://play-lh.googleusercontent.com/vVBVzNF6g2ri-I0t8YSAdSkQY8_Vjra3HFBkkWkhgVo8IjmxOOeLgRAZWn8_7PrnYcs"></img>
				</div>
				
				<div className="cart" onClick={() => setDisplayCart(!displayCart)}>
					<FontAwesomeIcon 
						icon={faShoppingCart}
					/>

					{/* This will be a dynamic value once the methods are in place */}
					<span>(0)</span>
				</div>	
			</div>

			{ dropdownMenuNav }
			{ dropdownMenuCart }

		</nav>
	)
}

export default Navbar;