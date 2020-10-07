import React from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/App.scss";


import AllPlants from "./AllPlants";
import AddPlants from "./AddPlant";
import Login from "./login";
import Register from "./register";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
    <div className="login">
      <div className="container">
      <Switch>
      <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/add-plant">
          <AddPlants />
        </Route>
        <Route exact path="/all-plants">
          <AllPlants />
        </Route>
      </Switch>
      </div>
    </div>
    </div>
  );
}

export default App;