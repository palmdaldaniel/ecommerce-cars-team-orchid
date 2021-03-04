import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
	]);

	//triggers when user clicks on purchase button on checkout page
	const handlePurchase = () => {
		console.log("a purchase has been made")
		
		//empties the cart. will be changed once more logic is added
		setCart(cart.length = 0)
		console.log(cart)

	}

	const values = { cart, handlePurchase };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
