import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
	]);

	//array for purchased cars to be rendered on confirmed page
	const [ purchased, setPurchased] = useState([
	]);
	const values = { cart, purchased };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
