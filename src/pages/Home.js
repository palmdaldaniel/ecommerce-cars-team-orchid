import Carousel from "../components/Carousel.js";
import Herobanner from "../components/Herobanner.js";
import ProductList from "../components/ProductList.js";
import Filter from "../components/Filter.js";

const Home = () => {
  return (
    <div className="Home">
      <Herobanner />
      <Carousel/>
      <Filter/>
      <ProductList />
    </div>
  );
};

export default Home;
