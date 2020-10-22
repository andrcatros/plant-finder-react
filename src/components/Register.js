import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {UserContext} from "./UserContext";
import GoBackButton from "./GoBackButton";
import Alert from "./Alert";

import "../styles/Register.css";

const Register = () => {
  const {user, setUser} = useContext(UserContext);

  const initialState = {
    fields: {
      email: "",
      password: "",
      name: "",
      about: "",
      profileImg: "",
      location: "Manchester",
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  let history = useHistory();
  let retypePassword;

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validate = () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (fields.name === null || fields.name.trim() === "") {
        setAlert({ message: "please use valid name" });
      } else {
        if (fields.password === retypePassword) {
          if (re.test(String(fields.email).toLowerCase())) {
            return true;
          } else {
            setAlert({ message: "please use valid email address" });
          }
        } else {
          setAlert({ message: "please retype the password correctly" });
        }
      }
    };

    const postData = async () => {
      await axios
        .post("https://plant-finder-api.herokuapp.com/api/v1/users", fields)
        .then((res) => {
          if (res.status === 201) {
            setAlert({ message: "success!", success: true });

            setUser(res.data)

            history.push("/");
          } else {
            setAlert({ message: "registration failed", success: false });
          }
        })
        .catch((err) => {
          setAlert({ message: "registration failed", success: false });
        });
    };

    if (validate()) {
      postData();
      setFields(initialState.fields);
      retypePassword = "";
    }
  };

  return (
    <div className="Register">
      <h3>Create New Account</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            name="name"
            onChange={handleFieldChange}
            value={fields.name}
          />
        </label>
        <label>
          Email address:
          <input
            id="email"
            name="email"
            autoComplete="email"
            onChange={handleFieldChange}
            value={fields.email}
          />
        </label>
        <label>
          City: {"   "}
          <select id="location" name="location" onChange={handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Preston">Preston</option>
            <option value="Blackpool">Blackpool</option>
          </select>
        </label>
        <label>
          Password:
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </label>
        <label>
          Retype password:
          <input
            id="retype-password"
            name="retype-password"
            type="password"
            value={retypePassword}
            onChange={(e) => (retypePassword = e.target.value)}
          />
        </label>
        <button type="submit" className="register-button">
          Submit
        </button>
      </form>

      {alert.message && <Alert {...alert} />}

      <GoBackButton path={"/"} />
    </div>
  );
};

export default Register;
