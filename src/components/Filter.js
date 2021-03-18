import React from 'react';
import { useContext, useState, useEffect } from 'react'
import { ProductsContext } from "../contexts/ProductsContext";
import styles from './css/Filter.module.css'

const Filter = () => {
	const { filterCars } = useContext(ProductsContext);
	const { products } = useContext(ProductsContext);
	const [filters, setFilters] = useState({
		make: "",
		model: "",
		year: "",
		min: "",
		max: "",
		miles: "80000",
	});

	const handleChange = (e) => {
		const filter = {...filters}
		filter[e.target.id] = e.target.value;
		setFilters(filter)

		if(e.target.value === '1'){
			setFilters(filters => ({
				...filters,
				min: "0",
				max: "150000"
			}))
		} else if (e.target.value === '2'){
			setFilters(filters => ({
				...filters,
				min: "150000",
				max: "300000"
			}))
		} else if (e.target.value === '3'){
			setFilters(filters => ({
				...filters,
				min: "300000",
				max: "400000"
			}))
		} else if (e.target.value === '4'){
			setFilters(filters => ({
				...filters,
				min: "400000",
				max: "500000"
			}))
		} else if (e.target.value === '5'){
			setFilters(filters => ({
				...filters,
				min: "500000",
				max: "700000"
			}))
		}
	};	

	useEffect(() => {
		filterCars(filters)
	}, [filters]) 
	
	

  return (
		<div className={styles.filterWrapper}>
			<p>Filter</p>
				<div className={styles.filterContainer}>
					<div className={styles.filter}>
						
						<select onChange={handleChange} id="make">
							<option value="">Brand</option>
							{products &&
								products
									.filter((v, i, a) => a.findIndex(t => t.make === v.make) === i)
									.map((product, i) => {
										return (
										<option value={product.make} key={i}>{product.make}</option>
									)
								})}
						</select>

						<select onChange={handleChange} id="model">
						<option value="">Model</option>
						{products &&
								products
									.filter((v, i, a) => a.findIndex(t => t.model === v.model) === i)
									.map((product, i) => {
										return (
										<option value={product.model} key={i}>{product.model}</option>
									)
								})}
						</select>

						<select onChange={handleChange} id="year">
						<option value="">Year</option>
						{products &&
								products
									.filter((v, i, a) => a.findIndex(t => t.year === v.year) === i)
									.map((product, i) => {
										return (
										<option value={product.year} key={i}>{product.year}</option>
									)
								})}
						</select>
						
						<select onChange={handleChange} id="price">
							<option value="">Price</option>
							<option value="1">0 - 150000</option>
							<option value="2">150000 - 300000</option>
							<option value="3">300000 - 400000</option>	
							<option value="4">400000 - 500000</option>
							<option value="5">500000 - 700000</option>
						</select>

						<select onChange={handleChange} id="miles">
							<option value="">Miles</option>
							<option value="1">0 - 150000</option>
							<option value="2">150000 - 300000</option>
							<option value="3">300000 - 500000</option>	
							<option value="4">500000 - 700000</option>
							<option value="5">700000 - 900000</option>
						</select>

					</div>	
			</div>
		</div>
  );
};

export default Filter;
