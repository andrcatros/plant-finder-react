import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LogIn from "./login";
import Profile from "./Profile";
import Register from "./register";
import "../styles/App.scss";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <div className="header">
      <div className="login">
      <div className="container">
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <LogIn setUser={setUser} />}
          ></Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route
            exact
            path="/profile"
            render={() =>
              user ? <Profile user={user} /> : <Redirect to="/Profile" />
            }
          ></Route>
        </Switch>
      </>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;