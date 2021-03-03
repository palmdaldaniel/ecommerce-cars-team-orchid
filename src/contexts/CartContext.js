import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
	]);

	const addToCart = () => {
		// logic to push items to cart goes here
	  }

	const values = { cart, addToCart};

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
