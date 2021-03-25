import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import Confirmed from "./pages/ConfirmationPage";
import Checkout from "./pages/Checkout.js";
import Product from "./pages/Product.js";
import About from "./pages/About";
import PurchaseHistory from "./pages/PurchaseHistory.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Search from "./pages/Search.js";
import NavSpacer from "./components/NavSpacer.js";

import ProductsContextProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";
import UserContextProvider from "./contexts/UserContext.js";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Navbar />
              <NavSpacer />
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
              <Route exact path="/search" component={Search}/>
              <Route exact path="/history">
                <PurchaseHistory />
              </Route>
            </BrowserRouter>
          </CartContextProvider>
        </UserContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;