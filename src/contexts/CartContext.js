import { createContext, useEffect, useState } from "react";
// import useFetch from "./useFetch"

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

	//total value of cart & purchased
	const [cartValue, setCartValue] = useState(0);
	const [purchasedValue, setPurchasedValue] = useState(0);

	//calculates cartValue & purchasedValue everytime cart or purchased updates
	useEffect(() => {
		setCartValue(
			cart.reduce((prev, cur) => prev + cur.price, 0)
		)
		setPurchasedValue(
			purchased.reduce((prev, cur) => prev + cur.price, 0))
	}, [cart, purchased])


	// Function for deleting in cart, triggers when clicks on delete-button 
function deleteCartItem(cartIndex) {
	setCart(cart.filter((c) => c.index !== cartIndex));
}

	//triggers when user clicks on purchase button on checkout page
	const handlePurchase = () => {
		//copies cart to purchased array and sets cart to an empty array 
		setPurchased([...cart])
		setCart([])
	}

	const values = { cart, addToCart, purchased, cartValue, purchasedValue, handlePurchase };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
