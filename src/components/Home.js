import React from "react";
import { Link } from "react-router-dom";

const Home = ({ isLoggedIn, userName }) => {
  return (
    <div className="Home" style={{ margin: "100px" }}>
      {isLoggedIn ? (
        <div>Welcome back {userName} :)</div>
      ) : (
        <div>
          Welcome. Would you like to login or register an account?
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
