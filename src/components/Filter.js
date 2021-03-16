import React from 'react';
import { useState, useContext } from 'react'
import { ProductsContext } from "../contexts/ProductsContext";
import styles from './css/Filter.module.css'

const Filter = () => {
	//const [filter, setFilter] = useState("");
	const { filterCars } = useContext(ProductsContext);
	const { products } = useContext(ProductsContext);

	const handleChange = (e) => {
		//setFilter(e.target.value);
		const filtered = e.target.value;
		console.log(filtered);
		//console.log(filter);
	};

				
  return (
		<div className={styles.filterContainer}>
			<div className={styles.filter}>

				<select onChange={handleChange}>
					{products &&
						products
							.filter((v, i, a) => a.findIndex(t => t.make === v.make) === i)
							.map((product, i) => {
								return (
								<option value={product.make} key={i}>{product.make}</option>
							)
						})}
        </select>

				<select>
				{products &&
						products
							.filter((v, i, a) => a.findIndex(t => t.model === v.model) === i)
							.map((product, i) => {
								return (
								<option value={product.model} key={i}>{product.model}</option>
							)
						})}
				</select>

				<select>
				{products &&
						products
							.filter((v, i, a) => a.findIndex(t => t.year === v.year) === i)
							.map((product, i) => {
								return (
								<option value={product.year} key={i}>{product.year}</option>
							)
						})}
				</select>

			</div>	
		</div>
  );
};

export default Filter;
