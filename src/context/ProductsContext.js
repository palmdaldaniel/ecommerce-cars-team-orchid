import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();


function ProductsContextProvider(props) {
// State for products after fetching from json
  //const [products, setProducts] = useState([]);
  const values = {
    // Insert you methods and values here
  };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
