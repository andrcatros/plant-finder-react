import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/mine.scss";
import loginImg from '../styles/open-doodles-plant.svg';

const initialState = {
  fields: {
    email: "",
    username: "",
    password: "",
  },
};

const Register = ({ setUserLoggedIn }) => {
  const [value, setValue] = useState(initialState.fields);
  const details = useHistory();
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.password === value.confirmPassword) {
      console.log("success");
      axios
        .post("https://plant-finder-api.herokuapp.com/api/v1/users", {
          username: value.username,
          email: value.email,
          password: value.password,
        })
        .then((response) => {
          console.log(response);
          setUserLoggedIn(true);
          alert("Successful registration!");
          details.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Passwords are not match!");
    }
  };

  return (
    <div className="base-container">
      <div className="content">
          <div className="image">
            <img src={loginImg} alt=""/>
          </div>
    <div className="form">
      <form action="submit" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Username"
          required
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          required
          name="confirmPassword"
          onChange={handleChange}
        />
      </div>
        <button type="submit" className="btn">Register</button>
      </form>
      </div>
      <Link to="/">Already got an account?</Link>
    </div>
  </div>
  );
};

export default Register;