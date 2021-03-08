import {
  productList,
  productListContainer,
} from "./css/ProductList.module.css";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className={productList}>
      <div className={productListContainer}>
        {products &&
          products.map((product, i) => (
            <ProductItem key={i} id={i} data={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
