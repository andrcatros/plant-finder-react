import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Alert from "./Alert";
import {UserContext} from "./UserContext";
import "../styles/EditProfile.css"

const EditProfile = () => {
  const {user} = useContext(UserContext);

  const [about, setAbout] = useState({ about: `${user.about}` });
  const [alert, setAlert] = useState({ message: "", success: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      await axios
        .patch(
          `https://plant-finder-api.herokuapp.com/api/v1/users/${user._id}`,
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
      {(user === null) ? (
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
