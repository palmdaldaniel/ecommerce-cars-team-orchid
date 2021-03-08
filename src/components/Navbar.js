import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import styles from "./css/Navbar.module.css";

function Navbar() {
  const [displayNavMenu, setDisplayNavMenu] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const history = useHistory();

  let dropdownMenuNav;
  if (displayNavMenu) {
    dropdownMenuNav = (
      <ul className={styles.navUL}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
      </ul>
    );
  }

  let dropdownMenuCart;
  if (displayCart) {
    dropdownMenuCart = (
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

            <button
              className={styles.proceedButton}
              onClick={() => {
                history.push("/checkout");
                setDisplayCart(!displayCart);
              }}
            >
              Proceed
            </button>
          </div>
        </ul>
      </div>
    );
  }

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <FontAwesomeIcon
          className={styles.hamburgerMenu}
          icon={faBars}
          onClick={() => setDisplayNavMenu(!displayNavMenu)}
        />
        <div className={styles.desktopLinks}>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div className={styles.about}>
            <NavLink to="/about">About us</NavLink>
          </div>
        </div>

        <div className={styles.centerLogo}>
          <img
            className={styles.navLogo}
            src="https://play-lh.googleusercontent.com/vVBVzNF6g2ri-I0t8YSAdSkQY8_Vjra3HFBkkWkhgVo8IjmxOOeLgRAZWn8_7PrnYcs"
            onClick={() => history.push("/")}
          ></img>
        </div>

        <div
          className={styles.cartContainer}
          onClick={() => setDisplayCart(!displayCart)}
        >
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cart} />

          {/* This will be a dynamic value once the methods are in place */}
          <span className={styles.cartNumber}>(0)</span>
        </div>
      </div>

      {dropdownMenuNav}
      {dropdownMenuCart}
    </nav>
  );
}

export default Navbar;
