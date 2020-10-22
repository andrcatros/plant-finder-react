import React, {useContext} from "react";
import { Link } from "react-router-dom";

import {UserContext} from "./UserContext";
import "../styles/Navbar.css";

const NavBar = ({ handleLogout }) => {
    const {user} = useContext(UserContext);
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
          {user ? (
            <>

            <li> <Link to={`/profile/${user._id}`}>Your Profile</Link>
            </li>
                        <li> <Link to="/messages">Your Messages</Link>
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
