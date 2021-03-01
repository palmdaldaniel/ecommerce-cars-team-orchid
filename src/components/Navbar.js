import { NavLink } from "react-router-dom";
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from "./css/Navbar.module.css";

function Navbar () {
	const [showMenu, setShowMenu] = useState(false)

	let dropdownMenu
	if (showMenu) {
		dropdownMenu = 
			<ul>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/">About us</NavLink>
			</ul>
	}

	return (
		<nav className={styles.navbarWrapper}>
			<div className={styles.navbar}>
				<FontAwesomeIcon 
					icon={faBars}
					onClick={() => setShowMenu(!showMenu)}
				/>

				<div className={styles.centerLogo}>
					<img src="https://play-lh.googleusercontent.com/vVBVzNF6g2ri-I0t8YSAdSkQY8_Vjra3HFBkkWkhgVo8IjmxOOeLgRAZWn8_7PrnYcs"></img>
				</div>
					
				<span className={styles.cartAlignment}>cart</span>
			</div>
			
			{ dropdownMenu }
		</nav>
	)
}

export default Navbar;