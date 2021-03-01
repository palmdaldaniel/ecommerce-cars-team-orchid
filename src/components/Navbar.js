import { NavLink } from "react-router-dom";
import styles from "./css/Navbar.module.css";

function Navbar () {
	return (
		<div>
			<div className={styles.navbarWrapper}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/">About us</NavLink>
			</div>
		</div>
	)
}

export default Navbar;