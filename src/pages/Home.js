import { useContext, useEffect } from "react";
import Herobanner from "../components/Herobanner.js";
import Carousel from "../components/Carousel.js";
import ProductList from "../components/ProductList.js";
import Filter from "../components/Filter.js";
import { ProductsContext } from "../contexts/ProductsContext";

const Home = () => {
  const { products, setFilters } = useContext(ProductsContext);

  useEffect(() => {
    setFilters(
      {
      make: "",
      model: "",
      year: "",
      min: "0",
      max: Infinity,
      minMiles: "0",
      maxMiles: Infinity
      }
    );
  }, [])

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
