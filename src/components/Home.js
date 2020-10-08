import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = ({ isLoggedIn, userName }) => {
  return (
    <div className="Home" style={{ margin: "100px" }}>
      {isLoggedIn ? (
        <div>
          Welcome back {userName} :){" "}
          <p>
            Would you like to{" "}
            <Link to="/edit-profile">edit your about page</Link> or post a new{" "}
            <Link to="/add-plant">plant swap ad</Link>?{" "}
          </p>
        </div>
      ) : (
        <>
          <p>Welcome to Plant Finder.</p>
          <p>Would you like to login or register an account?</p>
          <br />
          <div className="Home-buttons">
            {" "}
            <Link to="/login">
              <button>Login</button>
            </Link>
            <br />
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
