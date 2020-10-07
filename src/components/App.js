import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import AddPlant from "./AddPlant";
import AllPlants from "./AllPlants";

import "../styles/App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userName, setUserName] = useState(null);

  let history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();

    await setUserID(null);
    await setIsLoggedIn(false);

    history.push("/");
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} userID={userID} userName={userName} />
        </Route>
        <Route exact path="/login">
          <Login
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            setUserID={setUserID}
            setUserName={setUserName}
          />
        </Route>
        <Route exact path="/register">
          <Register
            setIsLoggedIn={setIsLoggedIn}
            setUserID={setUserID}
            setUserName={setUserName}
          />
        </Route>
        <Route exact path="/add-plant">
          <AddPlant isLoggedIn={isLoggedIn} userID={userID} />
        </Route>
        <Route exact path="/all-plants">
          <AllPlants />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
