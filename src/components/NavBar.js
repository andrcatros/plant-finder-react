import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import StyledNavBar from "../styles/styled-navbar";
import logo from "../styles/logo.png";

const NavBar = ({ onLogin, userID, onLogout }) => {
  const logout = (
    <button
      className="my-facebook-button-class"
      type="button"
      onClick={onLogout}
    >
      Logout
    </button>
  );

  return (
    <StyledNavBar>
      <img src={logo} alt="Plant Finder main logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Plants</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-plant">Add Plants</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
      {userID && logout}
      {!userID && (
        <FacebookLogin
          appId="2933242766961969"
          fields="name,email,picture"
          callback={(res) => onLogin(res)}
          cssClass="my-facebook-button-class"
          textButton="Login with Facebook"
          alt="Login with Facebook"
        />
      )}
    </StyledNavBar>
  );
};

export default NavBar;
