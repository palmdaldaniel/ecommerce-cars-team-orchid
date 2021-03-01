import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Route exact path="/"/>
    </BrowserRouter>
  </div>;
}

export default App;
