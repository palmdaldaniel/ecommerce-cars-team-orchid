import React from 'react';
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import CarouselItem from './CarouselItem';
import Slider from "react-slick";
import styles from "./css/Carousel.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
	const { products } = useContext(ProductsContext);
	const [filtered, setFiltered] = useState([]);
	
	var settings = {
		dots: true,
		infinite: true,
		autoplay:true,
		speed: 300,
		slidesToShow: 4, 
		slidesToScroll: 1,
		arrows: true,
	
			responsive: [
				{
					breakpoint: 1560,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					}
				},
				{
					breakpoint: 770,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					}
				},
			]
	};

	useEffect(() => {
		if (products) {
			setFiltered(products.filter(product => product.price < 180000))
		}
	}, [products] ) 

	return (
		<div className={styles.slideshowContainer}>
			<h1>Weekly offers</h1>
				<Slider {...settings}>
					{products &&
						filtered.map((product, i) => (
							<div key={i}>
								<CarouselItem id={products.indexOf(product)} data={product}/>
							</div>
					))}
				</Slider>
		</div>
	)
}

export default Carousel;
