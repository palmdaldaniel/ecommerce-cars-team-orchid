import Carousel from "../components/Carousel.js";
import Herobanner from "../components/Herobanner.js";
import ProductList from "../components/ProductList.js";

import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="Home">
      <Herobanner />
      <Carousel />
      <ProductList list={products} />
    </div>
  );
};

export default Home;
