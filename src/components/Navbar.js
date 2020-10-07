import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const NavBar = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-plants">All Plants</Link>
        </li>
        <li>
          {" "}
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}{" "}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
