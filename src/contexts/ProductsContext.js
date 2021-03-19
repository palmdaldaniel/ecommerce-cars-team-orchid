import { createContext, useEffect, useState } from "react";

import cars from "../json/cars.json";

export const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    /* go through every object and add a key value pair for an image src */
    const carsWithImage = cars.map((car) => {
      const image = {
        image: `/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`,
      };
      // prettier adds the parantheses
      return (car = { ...car, ...image });
    });
    setProducts(carsWithImage);
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const searchForCars = (search, filter) => {
    if (filteredProducts === undefined) return;
    const filteredCars = products.filter(
      (car) =>
        car.make.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase()) ||
        car.city.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filteredCars);
  };

  // Insert you methods and values here
  const values = {
    filteredProducts,
    products,
    searchForCars
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
