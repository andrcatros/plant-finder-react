import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/global-style";

import NavBar from "./NavBar";
import Plants from "./Plants";
import AddPlant from "./AddPlant";
import Favourites from "./Favourites";
import FavouriteDetail from "./FavouriteDetail";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (res) => {
    setUserID(res.id);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserID("");
  };
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Switch>
        <Route exact path="/">
          <Plants userID={userID} />
        </Route>
        <Route exact path="/add-plant">
          <AddPlant />
        </Route>
        <Route exact path="/favourites">
          <Favourites userID={userID} />
        </Route>
        <Route exact path="/favourites/detail">
          <FavouriteDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
