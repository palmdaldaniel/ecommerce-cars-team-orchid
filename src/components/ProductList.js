import { productList } from "./css/ProductList.module.css";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className={productList}>
      <div>
        {products &&
          products.map((product, i) => <ProductItem key={i} data={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
