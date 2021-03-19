import { useContext } from "react";

import Herobanner from "../components/Herobanner.js";
import Carousel from "../components/Carousel.js";
import ProductList from "../components/ProductList.js";
import Filter from "../components/Filter.js";

import { ProductsContext } from "../contexts/ProductsContext";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="Home">
      <Herobanner />
      <Carousel />
      <Filter/>
      <ProductList list={products} />
    </div>
  );
};

export default Home;
