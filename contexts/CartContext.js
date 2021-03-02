import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
		{
		},
	]);

	const values = { cart };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
