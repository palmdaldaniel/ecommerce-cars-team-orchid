import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
	]);

	function addToCart(product) {
		try {
			if (typeof product !== "object")
				throw new Error("Warning: 'product' was not an object. Cannot add to cart");
		}
		catch {
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
