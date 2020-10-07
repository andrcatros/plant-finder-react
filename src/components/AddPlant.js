import React, { useState } from "react";
import axios from "axios";

import Alert from "./Alert";

import "../styles/AddPlant.css";

const AddPlant = ({ isLoggedIn, userID }) => {
  const initialState = {
    name: "",
    description: "",
    category: "Houseplant",
  };

  const [fields, setFields] = useState(initialState);
  const [img, setImg] = useState(null);
  const [alert, setAlert] = useState({});

  const handleUpload = (event) => {
    setImg(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("img", img);
    data.append("name", fields.name);
    data.append("description", fields.description);
    data.append("category", fields.category);

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

    if (validate) {
      postData();
    }
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddPlant">
      {!isLoggedIn ? (
        <p>Please login to add plants.</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Plant image:
              <input
                type="file"
                name="img"
                id="img"
                accept="image/*"
                onChange={handleUpload}
              />
            </label>
            <label>
              Plant name:
              <input
                id="name"
                name="name"
                value={fields.name}
                onChange={handleFieldChange}
              />
            </label>
            <label>
              Plant description:
              <textarea
                id="description"
                name="description"
                onChange={handleFieldChange}
                value={fields.description}
              />
            </label>
            <label>
              Category: {"  "}
              <select
                id="category"
                name="category"
                onChange={handleFieldChange}
              >
                <option value="Houseplant">Houseplant</option>
                <option value="Seeds & Bulbs">Seeds & Bulbs</option>
                <option value="Seedling">Seedling</option>
                <option value="Pots & Containers">Pots & Containers</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <button type="submit" onSubmit={handleSubmit}>
              Submit
            </button>
          </form>

          {alert.message && <Alert {...alert} />}
        </div>
      )}
    </div>
  );
};

export default AddPlant;
