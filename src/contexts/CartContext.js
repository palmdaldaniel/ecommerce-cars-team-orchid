import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([]);

	//array for purchased cars to be rendered on confirmation page
	const [purchased, setPurchased] = useState([]);

	function addToCart(product) {
		if (typeof product !== "object") {
			console.error("Error adding to cart. 'product' was not an object");
			return;
		}
		setCart([...cart, product]);
	}

	//triggers when user clicks on purchase button on checkout page
	const handlePurchase = () => {
		//copies cart to purchased array and sets cart to an empty array 
		setPurchased([...cart])
		setCart([])
	}

	const values = { cart, addToCart, purchased, handlePurchase };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
