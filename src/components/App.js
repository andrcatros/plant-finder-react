import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Profile from "./Profile";
import AddPlant from "./AddPlant";
import AllPlants from "./AllPlants";
import EditProfile from "./EditProfile";
import Messages from "./Messages";
import MessageDetail from "./MessageDetail";
import SentMessages from "./SentMessages";

import { UserContext } from "./UserContext";

import "../styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  let history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();

    await setUser(null);

    history.push("/");
  };

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
      <Navbar handleLogout={handleLogout}  />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/add-plant">
          <AddPlant />
        </Route>
        <Route exact path="/all-plants">
          <AllPlants />
        </Route>
        <Route exact path="/edit-profile">
          <EditProfile/>
        </Route>
        <Route exact path="/profile/:userID">
          <Profile />
        </Route>
          <Route exact path="/messages">
          <Messages />
        </Route>
            <Route exact path="/sent-messages">
          <SentMessages />
        </Route>
        <Route path="/messages/detail/:id">
          <MessageDetail />
        </Route>
      </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
