import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

import "../styles/Home.css";


const Home = () => {
  const {user} = useContext(UserContext);

  return (
    <div className="Home" style={{ margin: "100px" }}>
      {(user !== null) ? (
        <div>
          Welcome back {user.name} :){" "}
          <p>
            Would you like to{" "}
            <Link to="/edit-profile">edit your about page</Link> or post a new{" "}
            <Link to="/add-plant">plant swap ad</Link>?{" "}
          </p>
        </div>
      ) : (
        <>
        <img src="/PlantDoodle.png" alt="Doodle of person holding plant" id="welcome-doodle"></img>
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
