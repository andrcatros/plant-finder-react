import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Alert from "./Alert";
import GoBackButton from "./GoBackButton";

const Login = ({ setIsLoggedIn, isLoggedIn, setUserID, setUserName }) => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({ message: "", success: false });

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = async () => {
      await axios
        .post("https://plant-finder-api.herokuapp.com/api/v1/login", fields)
        .then((res) => {
          if (res.status === 200) {
            setIsLoggedIn(true);
            setUserID(res.data._id);
            setUserName(res.data.name);
          } else {
            setAlert({
              message: "Login failed, try again",
              success: false,
            });
          }
        })
        .catch((err) => {
          let errMessage;
          if (!err.response) {
            errMessage = "Login failed, try again";
          } else {
            errMessage = err.response.data.message;
          }

          setAlert({
            message: errMessage,
            success: false,
          });
        });
    };

    postData();
    setFields({ email: "", password: "" });
  };

  return (
    <div className="Login" style={{ margin: "100px" }}>
      {isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <div>
          {" "}
          <p>This is Login.</p>
          <form onSubmit={handleSubmit}>
            <label>
              Email address:
              <input
                id="email"
                name="email"
                autoComplete="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </label>
            <label>
              Password:
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleFieldChange}
                value={fields.password}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {alert.message && <Alert {...alert} />}
          <GoBackButton path={"/"} />
        </div>
      )}{" "}
    </div>
  );
};

export default Login;
