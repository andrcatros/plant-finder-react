import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Store } from 'store';
import '../styles/App.scss';
import AllPlants from "./AllPlants";
import AddPlants from "./AddPlant";
import Login from "./login";
import Register from "./register";
import Profile from "./Profile";

const initialState = {
  fields: { email: '', password: '' }
};

const App = () => {
  const [user, setUser] = useState();
  const [value, setValue] = useState(initialState.fields);

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('https://plant-finder-api.herokuapp.com/api/v1/login', {
        email: value.email,
        password: value.password
      })
      .then(({ data }) => {
        setUser(data[0])
        Store.set('loggedIn', true);
        history.push('/users');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          <Switch>
            <Route exact path="/login" render={() => (
                <Login
                setUser={setUser}
                handleSubmit={handleSubmit}
                value={value}
                setValue={setValue}
              />
            )}
          >
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/Profile" render={() => (
              <Profile  userId={user._id} />
            )}>
          <Profile />
        </Route>
        <Route exact path="/add-plant" render={() =>
          <AddPlants user={user} />}
          >
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