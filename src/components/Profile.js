import React from "react";
import "../styles/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserSecret,
  faPlusCircle,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

const Profile = props => {
  const { name, username, email } = props.profile;

  return (
    <div className="main-container">
      <div className="image-container">
        <img src={"https://images.pexels.com/photos/5403574/pexels-photo-5403574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt={name} />
      </div>
      <div className="margin">
        <h2>{name}</h2>
        <h4>
          <FontAwesomeIcon icon={faUserSecret} /> {username}
        </h4>
        <p>
          <small>
            <FontAwesomeIcon icon={faPaperPlane} /> {email}
          </small>
        </p>
        <button
          className="button-style"
          onClick={() => props.handleAddProfile(props.profile)}
        >
          <FontAwesomeIcon icon={faPlusCircle} /> <b>Follow</b>{" "}
        </button>
      </div>
    </div>
  );
};

export default Profile;