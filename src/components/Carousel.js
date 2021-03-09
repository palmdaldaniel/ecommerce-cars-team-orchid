import React from 'react';
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import CarouselItem from './CarouselItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./css/Carousel.module.css"
import Slider from "react-slick";



const ImageSlider = () => {
	const { products } = useContext(ProductsContext);
	const [filtered, setFiltered] = useState([]);
	
	var settings = {
		dots: true,
		infinite: true,
		autoplay:true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		mobileFirst:true,

			responsive: [
				{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			}
		]
	};

	useEffect(() => {
		if (products) {
			setFiltered(products.filter(product => product.price < 200000))
		}
	}, [products] ) 

	return (
		<div className={styles.slideshowContainer}>
			<h1>Weekly offers</h1>
			<Slider {...settings}>
			{products &&
        filtered.map((product, i) => (
					<div key={i}>
						<CarouselItem id={i} data={product} />
					</div>
      ))}
			</Slider>
		</div>
	)
}

export default ImageSlider;
