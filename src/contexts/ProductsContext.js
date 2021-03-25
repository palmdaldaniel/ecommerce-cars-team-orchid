import { createContext, useEffect, useState } from "react";
import cars from "../json/cars.json";

export const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState(null);
  const [searchedProducts, setSearchedProducts] = useState(null);
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    min: "0",
    max: Infinity,
    minMiles: "0",
    maxMiles: Infinity,
    priceVal: "",
    milesVal: "",
  });

  useEffect(() => {
    // go through every object and add a key value pair for an image src
    const carsWithImage = cars.map((car) => {
      const image = {
        image: `/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`,
      };
      return (car = { ...car, ...image });
    });
    setProducts(carsWithImage);
  }, []);

  useEffect(() => {
    setSearchedProducts(products);
  }, [products]);

  useEffect(() => {
    searchForCars(search, filters);
  }, [search, filters]);

  const searchForCars = () => {
   // check if products has loaded
    if (!products) return;
    
   let searchedCars = products.filter(
      (car) =>
        car.make.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase()) ||
        car.city.toLowerCase().includes(search.toLowerCase())
    );
    
    if (filters) {
      searchedCars = searchedCars.filter((car) => {
        return (
          car.make.includes(filters.make) &&
          car.model.includes(filters.model) &&
          car.year.toString().includes(filters.year) &&
          car.price > filters.min &&
          car.price < filters.max &&
          car.miles > filters.minMiles &&
          car.miles < filters.maxMiles
        );
      });
    }
    setSearchedProducts(searchedCars);
  };

  const values = {
    search,
    filters,
    products,
    searchedProducts,
    setSearch,
    setFilters,
    searchForCars,
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;