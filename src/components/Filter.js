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
		price: "",
	});

	const handleChange = (e) => {
		const filter = {...filters}
		filter[e.target.id] = e.target.value;
		setFilters(filter)
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
					<option value="2"> 150000 - 300000</option>
					<option value="3">300000 - 400000</option>	
					<option value="4">400000 - 500000</option>
					<option value="5">500000 - 700000</option>
				</select>

				<select onChange={handleChange}>
					<option value="">Miles</option>
					<option>0 - 1000</option>
					<option>1000 - 5000</option>
					<option>5000 - 10000</option>
					<option>10000 - 15000</option>
					<option>15000 - 20000</option>
					<option>20000 - 28000</option>
					<option>28000 - 40000</option>
				</select>


			</div>	
		</div>
		</div>
  );
};

export default Filter;
