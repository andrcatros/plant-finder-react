import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const NavBar = ({ isLoggedIn, handleLogout, userID }) => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-plants">All Plants</Link>
        </li>

          {" "}
          {isLoggedIn ? (
            <>

            <li> <Link to={`/profile/${userID}`}>Your Profile</Link>
            </li>
            <li><button className="logout-button" onClick={handleLogout}>
              Logout
            </button> </li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}{" "}
      </ul>
    </div>
  );
};

export default NavBar;
