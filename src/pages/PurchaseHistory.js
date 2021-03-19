import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import style from "./css/PurchaseHistory.module.css";

function PurchaseHistory() {

	const { currentUser } = useContext(UserContext);
	const { cart, cartValue } = useContext(CartContext);

	return (
		<div className={style.container}>
			<h1>Purchase history</h1>

			{currentUser &&
			currentUser.history.map((purchase, i) => (
				<div className={style.purchase} key={i}>
					<h2>{purchase.timestamp}</h2>

					<div className={style.cartList}>
						{purchase.products.map((product, i) => (
							<div key={i} className={style.productRow}>
								<CartItem product={product} />
							</div>
						))}
					</div>

					<p className={style.totalCost}>
						{purchase.products.reduce((acc, val) => acc + val.price, 0).toLocaleString(
							navigator.language,
							{ style: "currency", currency: "SEK",}
						)}
					</p>
				</div>
			))}
		</div>
	);
}

export default PurchaseHistory;