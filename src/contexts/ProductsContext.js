import { createContext, useEffect, useState } from "react";

import cars from "../json/cars.json";

export const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState(null);
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




  // Insert you methods and values here
  const values = {
    products,
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
