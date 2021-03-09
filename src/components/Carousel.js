
import React from 'react';
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "./ProductItem";
import styles from "./css/Carousel.module.css"


const ImageSlider = () => {
	const { products } = useContext(ProductsContext);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		if (products) {
			setFiltered(products.filter(product => product.price < 500000))
		}
	}, [products] ) 

	return (
		<div>
			{products &&
        filtered.map((product, i) => (
					<div className={styles.productItem} key={i}>
						<ProductItem id={i} data={product} />
					</div>
      ))}
		</div>
	)
}

export default ImageSlider;
