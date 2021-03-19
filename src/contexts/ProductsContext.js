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
  const [filteredProducts, setFilteredProducts] = useState([]);

    setFilteredProducts(filteredCars);
  };
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]); 

  const filterCars = (filters) => {
      //console.log(filters)
      if(!products){
        return
      }
      setFilteredProducts(
        products.filter((car) => {
            return car.make.includes(filters.make) && 
            car.model.includes(filters.model) && 
            car.year.toString().includes(filters.year) &&
            car.price > filters.min && car.price < filters.max &&
            car.miles > filters.minMiles && car.miles < filters.maxMiles
        })
      ) 
  }  

  // Insert you methods and values here
  const values = {
    filteredProducts,
    products,
    searchForCars
    filteredProducts,
    filterCars,  
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
