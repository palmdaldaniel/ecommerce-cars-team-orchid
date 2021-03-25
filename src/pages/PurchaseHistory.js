import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import CartItem from "../components/CartItem";
import style from "./css/PurchaseHistory.module.css";

function PurchaseHistory() {
	const { currentUser } = useContext(UserContext);

	function renderPurchase(purchase, key) {
		return (
			<div key={key}>
				<h2 className={style.purchaseTitle}>
					{new Date(purchase.timestamp).toLocaleString(
						navigator.language,
						{},
					)}
				</h2>
				<div className={style.purchase}>

					<div className={style.cartList}>
						{purchase.products.map((product, i) => (
							<div key={i} className={style.productRow}>
								<CartItem product={product} />
							</div>
						))}
					</div>
					<hr/>
					
					<p className={style.totalCost}>
						{purchase.products.reduce((acc, val) => acc + val.price, 0).toLocaleString(
							navigator.language,
							{ style: "currency", currency: "SEK",}
						)}
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className={style.container}>
			<h1 className={style.pageTitle}>Purchase history</h1>

			<div className={style.purchaseList}>
				{(currentUser && currentUser.history.length) ?
					currentUser.history.map((p, i) => renderPurchase(p, i))
					:
					<p>You haven't made any purchases. Please buy something!</p>
				}
			</div>
		</div>
	);
}

export default PurchaseHistory;