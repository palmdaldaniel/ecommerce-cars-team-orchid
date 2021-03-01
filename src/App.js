import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Confirmed from './pages/ConfirmationPage'


function App() {
  return <div className="App">
    <BrowserRouter>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/Confirmed">
        <Confirmed />
      </Route>
    </BrowserRouter>
  </div>;
}

export default App;
