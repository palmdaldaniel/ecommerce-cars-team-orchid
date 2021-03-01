import { NavLink } from "react-router-dom";
import React, { useState } from "react"


import styles from "./css/Navbar.module.css";

function Navbar () {
	//use boolean to create toggle effect on hamburger menu
	const [navbarOpen, setNavbarOpen] = useState(false)

	const handleToggle = () => {
		setNavbarOpen(prev => !prev)
	}

	const closeMenu = () => {
		setNavbarOpen(false)
	}

	return (
		<nav className="navBar">
				<div className={styles.navbarWrapper}>
				<button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
					<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
						<NavLink 
						to="/"
						activeClassName="active-link"
  					onClick={() => closeMenu()}
  					exact>
						Home
						</NavLink>
						<NavLink 
						to="/"
						activeClassName="active-link"
  					onClick={() => closeMenu()}
  					exact>
						About
						</NavLink>
					</ul>
				</div>
		</nav>
	)
}

export default Navbar;