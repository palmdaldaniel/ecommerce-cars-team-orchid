import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Confirmed from './pages/ConfirmationPage'
import Checkout from './pages/Checkout.js'
import Product from './pages/Product.js'
import About from './pages/About';
import CartContextProvider from './contexts/CartContext'

function App() {
  return <div className="App">
    <BrowserRouter>
      <CartContextProvider>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Confirmed">
          <Confirmed />
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/about">
          <About/>
        </Route>
      </CartContextProvider>
    </BrowserRouter>
  </div>;
}

export default App;
