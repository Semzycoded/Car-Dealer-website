import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./home";
import SearchBar from "./search"
import DisplayCars from "./displayCars";
import Cars from "./cars";

function App() {
  const [actions, setActions] = useState("home")
  return (
      <div className="App">
        <NavBar actions={actions} setActions={setActions}/>
        <Home actions={actions} setActions={setActions}/>
        {/* <Router>
          <Switch>
            <Route path="/cars/:id" exact component={DisplayCars} />
            <Route path="/cars" exact component={Cars} />
          </Switch>
      </Router> */}
      </div>
  );
}

export default App;
