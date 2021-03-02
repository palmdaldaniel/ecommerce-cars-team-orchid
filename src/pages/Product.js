import { useState } from "react";

import styles from "./css/Product.module.css";

function Product(props) {

	const [testProduct] = useState({
		"make": "Chevrolet",
		"model": "Camaro",
		"year": 1973,
		"vin": "1D4PT5GK0BW487259",
		"city": "Santa Rosa",
		"descShort": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
		"descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
		"price": 554963,
		"miles": 15432
	});
	
	const [imgSrc] = useState(`/assets/car-pictures/${testProduct.make}-${testProduct.model}-${testProduct.year}.jpg`);

	return (
		<div className="container">
			<div className="row">
				<div className="col s12 m8">
					<img className={styles.productImg} src={imgSrc} />
				</div>
				<div className="col s12 m4">
					<table>
						<tbody>
							<tr>
								<td>Make</td>
								<td>{testProduct.make}</td>
							</tr>
							<tr>
								<td>Model</td>
								<td>{testProduct.model}</td>
							</tr>
							<tr>
								<td>Year</td>
								<td>{testProduct.year}</td>
							</tr>
							<tr>
								<td>VIN</td>
								<td>{testProduct.vin}</td>
							</tr>
							<tr>
								<td>City</td>
								<td>{testProduct.city}</td>
							</tr>
							<tr>
								<td>Miles</td>
								<td>{testProduct.miles}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h1 className={styles.productTitle}>{testProduct.descShort}</h1>
					<p>{testProduct.descLong}</p>
				</div>
			</div>
		</div>
	);
}

export default Product;