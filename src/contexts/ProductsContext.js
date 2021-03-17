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


  const [filteredProducts, setFilteredProducts] = useState(null);

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
          if(filters.price === ''){
            return car.make.includes(filters.make) && 
            car.model.includes(filters.model) && 
            car.year.toString().includes(filters.year) &&
            car.miles <= filters.miles

          } else if(filters.price === '1'){
            return car.price > 0 && car.price < 150000 && 
            car.make.includes(filters.make) &&
            car.model.includes(filters.model) && 
            car.year.toString().includes(filters.year) &&
            car.miles <= filters.miles

          } else if(filters.price === '2'){
            return car.price > 150000 && car.price < 300000 && 
            car.make.includes(filters.make) &&
            car.model.includes(filters.model) && 
            car.year.toString().includes(filters.year) &&
            car.miles <= filters.miles

          } else if(filters.price === '3'){
            return car.price > 300000 && car.price < 400000 && 
            car.make.includes(filters.make) &&
            car.model.includes(filters.model) && 
            car.year.toString().includes(filters.year) &&
            car.miles <= filters.miles

          } else if(filters.price === '4'){
            return car.price > 400000 && car.price < 500000 && 
            car.make.includes(filters.make) &&
            car.model.includes(filters.model) && 
            car.year.toString().includes(filters.year) &&
            car.miles <= filters.miles

          } else if(filters.price === '5'){
            return car.price > 500000 && car.price < 700000 && 
            car.make.includes(filters.make) &&
            car.model.includes(filters.model) && 
            car.year.toString().includes(filters.year) &&
            car.miles <= filters.miles
          } 
        })
      )   
  }  

//            car.miles <= filters.miles


  /* const filterCars = (filters) => {
    console.log(filters)
    if(!products){
      return
    }
    setFilteredProducts(
      products.filter((car) =>
        car.make.includes(filters.make) && 
        car.model.includes(filters.model) && 
        car.year.toString().includes(filters.year)
      ).filter((car) => {
        if(filters.price === '1'){
          return car.price > 0 && car.price < 150000
        } else if(filters.price === '2'){
          return car.price > 150000 && car.price < 300000
        } else if(filters.price === '3'){
          return car.price > 300000 && car.price < 400000
        } else if(filters.price === '4'){
          return car.price > 400000 && car.price < 500000
        } else if(filters.price === '5'){
          return car.price > 500000 && car.price < 700000
        }
      })
    )   
  }   */


  // Insert you methods and values here
  const values = {
    products,
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
