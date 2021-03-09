import Herobanner from "../components/Herobanner.js";
import ProductList from "../components/ProductList.js";

const Home = () => {
  return (
    <div className="Home">
      <Herobanner />
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
