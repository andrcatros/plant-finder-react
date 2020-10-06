import React from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/App.scss";


import AllPlants from "./AllPlants";
import AddPlants from "./AddPlant";
import Login from "./login";
import Register from "./register";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/add-plant">
          <AddPlants />
        </Route>
        <Route exact path="/all-plants">
          <AllPlants />
        </Route>
      </Switch>
    </div>
  );
}

export default App;