import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
		{
			car: "old volvo",
			age: "old"
		},
		{
			car: "another old volvo",
			age: "even older"
		}
	]);

	const handlePurchase = () => {
		console.log("a purchase has been made")
	}

	const values = { cart, handlePurchase };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
