import React, { useState } from "react";
import axios from "axios";

import Alert from "./Alert";
import "../styles/AddPlant.css";

const AddPlant = ({ isLoggedIn, userID }) => {
  const initialState = {
    name: "",
    description: "",
    category: ["Houseplant"],
  };

  const [fields, setFields] = useState(initialState);
  const [alert, setAlert] = useState({});

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);

    const data = new FormData(e.target);
    console.log(data);

    const validate = () => {
      if (fields.name === null || fields.name.trim() === "") {
        setAlert({ message: "please enter a name" });
      } else {
        if (fields.description === null || fields.name.description === "") {
          setAlert({ message: "please enter a description" });
        } else {
          return true;
        }
      }
    };

    const postData = async () => {
      await axios
        .post(
          `https://plant-finder-api.herokuapp.com/api/v1/users/${userID}/plants`,
          data
        )
        .then((res) => {
          if (res.status === 201) {
            setAlert({ message: "success!", success: true });
          } else {
            setAlert({ message: "failed to add plant", success: false });
          }
        })
        .catch((err) => {
          setAlert({ message: "failed to add plant", success: false });
        });
    };

    if (validate) {
      postData();
    }
  };

  return (
    <div className="AddPlant">
      {/*}   {!isLoggedIn ? (
        <p>Please login to add plants.</p>
   ) : ( */}
      <div>
        <p>DO NOT USE UNTIL LOGIN IS SETUP</p>
        <form onSubmit={handleSubmit} className="AddPlant-form">
          <label>
            Image file: <br />
            <input type="file" name="img" id="img" accept="image/*" />
          </label>
          <label>
            Name: <br />
            <input
              id="name"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />
          </label>
          <label>
            Description: <br />
            <textarea
              id="description"
              name="description"
              onChange={handleFieldChange}
              value={fields.description}
            />
          </label>
          <label>
            Category: <br />
            <select id="category" name="category" onChange={handleFieldChange}>
              <option value="Houseplant">Houseplant</option>
              <option value="Seeds & Bulbs">Seeds & Bulbs</option>
              <option value="Seedling">Seedling</option>
              <option value="Pots & Containers">Pots & Containers</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>

        {alert.message && <Alert {...alert} />}
      </div>
    </div>
  );
};

export default AddPlant;
