import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PlantCard from "./PlantCard";

import "../styles/Profile.css";

const Profile = () => {
  const params = useParams();
  const userID = params.userID;

  const [profile, setProfile] = useState(null);
  const [myPlants, setMyPlants] = useState([]);

  // get profile data
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://plant-finder-api.herokuapp.com/api/v1/users/${userID}`)
        .then((res) => setProfile(res.data))
        .catch((err) => console.log(err));

      await axios
        .get(
          `https://plant-finder-api.herokuapp.com/api/v1/users/${userID}/plants`
        )
        .then((res) => setMyPlants(res.data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, [userID]);

  return (
    <div className="Profile">
      {profile === null ? (
        <div>Loading data...</div>
      ) : (
        <>
          <div className="Profile-text">
            <h2>{profile.name}'s profile</h2>
            <p>
              Location: <b>{profile.location}</b>
            </p>
            <p>
              About me: <b>{profile.about} </b>
            </p>
            <a href={`mailto:${profile.email}?subject=Plant Swap`}>
              <button type="button" className="profile-email-button">
                Email Me
              </button>
            </a>
          </div>
          <h4>My plants:</h4>
          <div className="Profile-container">
            {myPlants.map((plant) => (
              <PlantCard
                key={plant._id}
                email={plant.User.email}
                name={plant.name}
                plantBy={plant.User.name}
                plantByID={plant.User._id}
                plantLocation={plant.User.location}
                description={plant.description}
                category={plant.category}
                img={plant.img}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
