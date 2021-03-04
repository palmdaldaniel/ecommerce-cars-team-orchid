import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
		{
			car: "old Volvo", //placeholders for testing, can be deleted once testing is complete
			age: "old"
		},
		{
			car: "even older volvo",
			age: "extremely old"
		}
	]);

	//array for purchased cars to be rendered on confirmed page
	const [ purchased, setPurchased] = useState([
	]);

	//used for testing, can be deleted later
	const [ isCartChanged, setIsCartChanged] = useState(false)


	//triggers when user clicks on purchase button on checkout page
	const handlePurchase = () => {
		console.log("a purchase has been made")
		
		//copies cart to purchased array and sets cart to an empty array 
		setPurchased([...cart])
		setCart([])

		//used for testing, can be deleted later
		setIsCartChanged(true)	
	}

	//used for testing handlePurchase method, can be deleted later
	useEffect(() => {
		console.log(cart)
		console.log(purchased)
		setIsCartChanged(false)
	}, [isCartChanged])

	const values = { cart, purchased, handlePurchase };

	return (
		<CartContext.Provider value={values}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
