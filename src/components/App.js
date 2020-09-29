import React from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/App.css";

import AllPlants from "./AllPlants";
import AddPlants from "./AddPlant";

function App() {
  return (
    <div className="App">
      <Switch>
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
