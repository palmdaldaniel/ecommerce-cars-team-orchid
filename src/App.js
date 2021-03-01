import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Navbar from './components/Navbar.js'
import Checkout from './pages/Checkout.js'

function App() {
  return <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/checkout">
        <Checkout/>
      </Route>
    </BrowserRouter>
  </div>;
}

export default App;
