import Carousel from "../components/Carousel.js";
import Herobanner from "../components/Herobanner.js";
import ProductList from "../components/ProductList.js";

const Home = () => {
  return (
    <div className="Home">
      <Herobanner />
      <Carousel/>
      <ProductList />
    </div>
  );
};

export default Home;
