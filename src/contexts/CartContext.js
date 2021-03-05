import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
	const [cart, setCart] = useState([
		{
			make: "Ford",
			model: "Econoline E150",
			year: 2002,
			vin: "JN8AS5MT8BW176945",
			city: "Shanban",
			descShort: "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
			descLong: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
			price: 413322,
			miles: 14266
		  },
	]);

	//array for purchased cars to be rendered on confirmation page
	const [purchased, setPurchased] = useState([]);

	function addToCart(product) {
		if (typeof product !== "object") {
			console.error("Error adding to cart. 'product' was not an object");
			return;
		}
		setCart([...cart, product]);
	}

	//total value of cart
	const [cartValue, setCartValue] = useState(0);
	const [purchasedValue, setPurchasedValue] = useState(0);

	//calculates cartValue everytime cart updates
	useEffect(() => {
		setCartValue(
			cart.reduce((prev, cur) => prev + cur.price, 0)
		)
	}, [cart])

	useEffect(() => {
		console.log(purchased)
		console.log(purchasedValue)
		setPurchasedValue(purchased.reduce((prev, cur) => prev + cur.price, 0))
	}, [purchased])

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
