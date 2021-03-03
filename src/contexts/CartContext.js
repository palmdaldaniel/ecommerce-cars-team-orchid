import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
	]);

	function addToCart(product) {
		if (typeof product !== "object") {
			console.error("Error adding to cart. 'product' was not an object");
			return;
		}
		setCart([...cart, product]);
	}

	const values = { cart, addToCart };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
