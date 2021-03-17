import React from 'react';
import { useContext, useState } from 'react'
import { ProductsContext } from "../contexts/ProductsContext";
import styles from './css/Filter.module.css'

const Filter = () => {
	const { filterCars } = useContext(ProductsContext);
	const { products } = useContext(ProductsContext);
	const [filtered, setFiltered] = useState();

	const handleChange = (e) => {
		setFiltered(e.target.value)
		//const filtered = e.target.value;
		filterCars(filtered)
	};	
				
  return (
		<div className={styles.filterWrapper}>
		<p>Filter</p>
		<div className={styles.filterContainer}>
			<div className={styles.filter}>
				
				<select onChange={handleChange}>
					<option>Brand</option>
					{products &&
						products
							.filter((v, i, a) => a.findIndex(t => t.make === v.make) === i)
							.map((product, i) => {
								return (
								<option value={product.make} key={i}>{product.make}</option>
							)
						})}
        </select>

				<select onChange={handleChange}>
				<option>Model</option>
				{products &&
						products
							.filter((v, i, a) => a.findIndex(t => t.model === v.model) === i)
							.map((product, i) => {
								return (
								<option value={product.model} key={i}>{product.model}</option>
							)
						})}
				</select>

				<select onChange={handleChange}>
				<option>Year</option>
				{products &&
						products
							.filter((v, i, a) => a.findIndex(t => t.year === v.year) === i)
							.map((product, i) => {
								return (
								<option value={product.year} key={i}>{product.year}</option>
							)
						})}
				</select>
				
				<select onChange={handleChange}>
					<option>Price</option>
					<option>0 - 150000</option>
					<option>150000 - 300000</option>
					<option>300000 - 400000</option>
					<option>400000 - 500000</option>
					<option>500000 - 700000</option>
				</select>

				<select onChange={handleChange}>
					<option>Miles</option>
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
