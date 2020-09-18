import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import SideBar from "./SideBar";
import PlantCard from "./PlantCard";
import Alert from "./Alert";

const Plants = ({ userID }) => {
  const [listings, setListings] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  const { search } = useLocation();

  // render initial page
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://stormy-depths-48903.herokuapp.com/api/v2/PropertyListing")
        .then((response) => setListings(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, []);

  // re-render page when a search is made
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://stormy-depths-48903.herokuapp.com/api/v2/PropertyListing/${search}`
        )
        .then((response) => setListings(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, [search]);

  // handle saving plants to favourites
  const handleSavePlant = async (plantID) => {
    const param = { plantListing: plantID, fbUserId: userID };
    await axios
      .post("https://stormy-depths-48903.herokuapp.com/api/v2/Favourite", param)
      .catch((err) => setAlert({ message: "Favourite could not be saved." }));
  };

  return (
    <div
      className="plants"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <SideBar />
      <div
        className="plants-container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "60px",
          marginLeft: "220px",
          paddingLeft: "20px",
          backgroundColor: "#D0D0D0",
        }}
      >
        {listings.map((listing) => (
          <PlantCard
            {...listing}
            key={listing._id}
            userID={userID}
            onSave={handleSavePlant}
          />
        ))}
        {alert.message && <Alert message={alert.message} />}
      </div>
    </div>
  );
};

export default Plants;
