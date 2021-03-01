import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Navbar from './components/Navbar.js'


function App() {
  return <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/">
        <Home/>
      </Route>
    </BrowserRouter>
  </div>;
}

export default App;
