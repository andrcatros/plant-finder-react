
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/mine.scss";
import loginImg from '../styles/open-doodles-plant.svg';

const initialState = {
  fields: { email: "", password: "" },
};

const LogIn = ({ setUser }) => {
  const [value, setValue] = useState(initialState.fields);
  const handleInput = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post("https://plant-finder-api.herokuapp.com/api/v1/login", {
        email: value.email,
        password: value.password,
      }).then((response) => {
        setUser(response);
      }).catch((err) => {
        console.log(err);
        alert("Error! Try Again!")
      });
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
          type="text"
          placeholder="Username"
          required
          name="username"
          onChange={handleInput}
          value={value.email}
        /></div>
        <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleInput}
          value={value.password}
        /></div>
        <div className="footer">
        <button type="submit" className="btn">Login</button>
        <Link to="/Profile"></Link>
        </div>
      </form>
      <Link to="/register">Sign up!</Link>
    </div>
    </div>
    </div>
  )
};

export default LogIn;