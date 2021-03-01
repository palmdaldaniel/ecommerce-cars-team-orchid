import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Checkout from './pages/Checkout.js'

function App() {
  return <div className="App">
    <BrowserRouter>
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
