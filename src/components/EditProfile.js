import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Alert from "./Alert";
import "../styles/EditProfile.css"

const EditProfile = ({
  existingAbout,
  email,
  name,
  location,
  isLoggedIn,
  userID,
}) => {
  const [about, setAbout] = useState({ about: `${existingAbout}` });
  const [alert, setAlert] = useState({ message: "", success: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      await axios
        .patch(
          `https://plant-finder-api.herokuapp.com/api/v1/users/${userID}`,
          about
        )
        .then((res) => {
          if (res.status === 200) {
            setAlert({
              message: "About updated!",
              success: true,
            });
          } else {
            setAlert({
              message: "Update failed!",
              success: false,
            });
          }
        })
        .catch((err) => {
          console.log(":( fail");
        });
    };

    postData();
  };

  return (
    <div className="Edit-Profile" >
      {!isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Add your About description below: <br />
              <textarea
                id="about"
                name="about"
                onChange={(e) => setAbout({ about: `${e.target.value}` })}
                value={about.about}
              />
            </label>
            <br />
            <button type="submit" className="edit-button">
              Submit
            </button>
          </form>

          {alert.message.length !== 0 ? (
            <Alert message={alert.message} success={alert.success} />
          ) : (
            <div> </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditProfile;
