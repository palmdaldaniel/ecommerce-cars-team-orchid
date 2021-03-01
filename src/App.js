import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Checkout from "./pages/Checkout.js";

import ProductsContextProvider from "./context/ProductsContext";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <BrowserRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </BrowserRouter>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
