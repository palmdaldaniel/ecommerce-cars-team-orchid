import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <div>
        {products.map((product, i) => (
          <ProductItem key={i} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
