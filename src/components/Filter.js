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
		min: "0",
		max: Infinity,
		minMiles: "0",
		maxMiles: Infinity
	});

	const handleChange = (e) => {
		const filter = {...filters}
		filter[e.target.id] = e.target.value;
		setFilters(filter)
	};	

	const handleChangePrice = (e) => {
		if (e.target.value === ''){
			setFilters({ ...filters, min: 0, max: Infinity})
		} else if (e.target.value === '1'){
			setFilters({ ...filters, min: 0, max: 150000})
		} else if (e.target.value === '2'){
			setFilters({ ...filters, min: 150000, max: 300000})
		} else if (e.target.value === '3'){
			setFilters({ ...filters, min: 300000, max: 400000})
		} else if (e.target.value === '4'){
			setFilters({ ...filters, min: 400000, max: 500000})
		} else if (e.target.value === '5'){
			setFilters({ ...filters, min: 500000, max: 700000})
		} 
	}

	const handleChangeMiles = (e) => {
		if (e.target.value === ''){
			setFilters({ ...filters, minMiles: 0, maxMiles: Infinity})
		} else if (e.target.value === '1'){
			setFilters({ ...filters, minMiles: 0, maxMiles: 15000})
		} else if (e.target.value === '2'){
			setFilters({ ...filters, minMiles: 15000, maxMiles: 30000})
		} else if (e.target.value === '3'){
			setFilters({ ...filters, minMiles: 30000, maxMiles: 50000})
		} else if (e.target.value === '4'){
			setFilters({ ...filters, minMiles: 50000, maxMiles: 70000})
		} else if (e.target.value === '5'){
			setFilters({ ...filters, minMiles: 70000, maxMiles: 90000})
		} 
	}

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
						
						<select onChange={handleChangePrice} id="price">
							<option value="">Price</option>
							<option value="1">0 - 150000</option>
							<option value="2">150000 - 300000</option>
							<option value="3">300000 - 400000</option>	
							<option value="4">400000 - 500000</option>
							<option value="5">500000 - 700000</option>
						</select>

						<select onChange={handleChangeMiles} id="miles">
							<option value="">Miles</option>
							<option value="1">0 - 15000</option>
							<option value="2">15000 - 30000</option>
							<option value="3">30000 - 50000</option>	
							<option value="4">50000 - 70000</option>
							<option value="5">70000 - 90000</option>
						</select>

					</div>	
			</div>
		</div>
  );
};

export default Filter;
