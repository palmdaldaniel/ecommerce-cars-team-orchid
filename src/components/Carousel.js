
import React from 'react';
import { useContext } from "react";

import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "./ProductItem";



const ImageSlider = () => {
		//const { products } = useContext(ProductsContext);
	const products = [
		{
		"make": "Chevrolet",
    "model": "Camaro",
    "year": 1973,
    "vin": "1D4PT5GK0BW487259",
    "city": "Santa Rosa",
    "descShort": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
    "descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "price": 554963,
    "miles": 15432
	},
	{
		"make": "Pontiac",
    "model": "Montana SV6",
    "year": 2006,
    "vin": "JN1CV6FE7DM360307",
    "city": "Jāsim",
    "descShort": "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
    "descLong": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "price": 299379,
    "miles": 12346
	}
]

	const filtered = products.filter(product => product.make === 'Pontiac');
	
	return (
		<div>
			{products &&
        filtered.map((product, i) => (
          <ProductItem key={i} id={i} data={product} />
      ))}
		</div>
	)
}

export default ImageSlider;
