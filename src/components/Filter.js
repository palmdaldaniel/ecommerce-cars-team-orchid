import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useHistory } from "react-router-dom";
import styles from "./css/Filter.module.css";

const Filter = () => {
  const { filters, setFilters, products } = useContext(ProductsContext);
  const history = useHistory();
  const [makes, setMakes] = useState(null);
  const [models, setModels] = useState(null);
  const [years, setYears] = useState(null);

  useEffect(() => {
    if (!products) return;

    // sort cars by make in alphabetical order and get rid of duplicates
    const sortByMake = products
      .sort((a, b) => {
        if (a.make < b.make) {
          return -1;
        }
        if (a.make > b.make) {
          return 1;
        }
        return 0;
      })
      .filter((p, i, a) => a.findIndex((c) => c.make === p.make) === i);

    // sort cars by model in alphabetical order and get rid of duplicates
    const sortByModel = products
      .sort((a, b) => {
        if (a.model < b.model) {
          return -1;
        }
        if (a.model > b.model) {
          return 1;
        }
        return 0;
      })
      .filter((p, i, a) => a.findIndex((c) => c.model === p.model) === i);
	  
    // sort cars by year and get rid of duplicates
    const sortByYear = products
      .sort((a, b) => {
        if (a.year < b.year) {
          return -1;
        }
        if (a.year > b.year) {
          return 1;
        }
        return 0;
      })
      .filter((p, i, a) => a.findIndex((c) => c.year === p.year) === i);

    setMakes(sortByMake);
    setModels(sortByModel);
    setYears(sortByYear);
  }, [products]);

  const handleChange = (e) => {
    const filter = { ...filters };
    filter[e.target.id] = e.target.value;
    setFilters(filter);
    history.push("/search");
  };

  const handleChangePrice = (e) => {
    if (e.target.value === "") {
      setFilters({ ...filters, min: 0, max: Infinity });
    } else if (e.target.value === "1") {
      setFilters({ ...filters, min: 0, max: 150000 });
    } else if (e.target.value === "2") {
      setFilters({ ...filters, min: 150000, max: 300000 });
    } else if (e.target.value === "3") {
      setFilters({ ...filters, min: 300000, max: 400000 });
    } else if (e.target.value === "4") {
      setFilters({ ...filters, min: 400000, max: 500000 });
    } else if (e.target.value === "5") {
      setFilters({ ...filters, min: 500000, max: 700000 });
    }
    history.push("/search");
  };

  const handleChangeMiles = (e) => {
    if (e.target.value === "") {
      setFilters({ ...filters, minMiles: 0, maxMiles: Infinity });
    } else if (e.target.value === "1") {
      setFilters({ ...filters, minMiles: 0, maxMiles: 15000 });
    } else if (e.target.value === "2") {
      setFilters({ ...filters, minMiles: 15000, maxMiles: 30000 });
    } else if (e.target.value === "3") {
      setFilters({ ...filters, minMiles: 30000, maxMiles: 50000 });
    } else if (e.target.value === "4") {
      setFilters({ ...filters, minMiles: 50000, maxMiles: 70000 });
    } else if (e.target.value === "5") {
      setFilters({ ...filters, minMiles: 70000, maxMiles: 90000 });
    }
    history.push("/search");
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <select onChange={handleChange} id="make">
            <option value="">Brand</option>
            {makes &&
              makes.map((car, i) => {
                return (
                  <option value={car.make} key={i}>
                    {car.make}
                  </option>
                );
              })}
          </select>

          <select onChange={handleChange} id="model">
            <option value="">Model</option>
            {models &&
              models.map((car, i) => {
                return (
                  <option value={car.model} key={i}>
                    {car.model}
                  </option>
                );
              })}
          </select>

          <select onChange={handleChange} id="year">
            <option value="">Year</option>
            {years &&
              years.map((car, i) => {
                return (
                  <option value={car.year} key={i}>
                    {car.year}
                  </option>
                );
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
