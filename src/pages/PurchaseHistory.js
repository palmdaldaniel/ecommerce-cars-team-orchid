import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import CartItem from "../components/CartItem";
import style from "css/PurchaseHistory.module.css";

function PurchaseHistory() {

	const { currentUser } = useContext(UserContext);

	return (
		<div className={style.container}>
			<h1>Purchase history</h1>

			{currentUser.history.map((purchase, i) => (
				<div className={style.purchase} key={i}>
					<h2>{purchase.timestamp}</h2>

					<div className={style.cartList}>
						{cart.map((product, i) => (
							<div key={i} className={style.productRow}>
								<CartItem product={product} />
							</div>
						))}
					</div>

					<p className={style.totalCost}>{valueStr}</p>
				</div>
			))}
		</div>
	);
}