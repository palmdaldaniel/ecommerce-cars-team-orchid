import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import Confirmed from "./pages/ConfirmationPage";
import Checkout from "./pages/Checkout.js";
import Product from "./pages/Product.js";
import About from "./pages/About";
import CartContextProvider from "./contexts/CartContext";
import ScrollToTop from "./components/ScrollToTop.js";

import ProductsContextProvider from "./contexts/ProductsContext";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/confirmed">
              <Confirmed />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/about">
              <About />
            </Route>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
