import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import qs from "qs";

import PlantCard from "./PlantCard";

const FavouriteDetail = () => {
  const [currentListing, setCurrentListing] = useState(false);

  console.log("you are in favourite detail");
  const { search } = useLocation();
  const str = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://stormy-depths-48903.herokuapp.com/api/v2/PropertyListing/${str.property}`
        )
        .then((response) => setCurrentListing(response.data));
    }
    fetchData();
  }, [str.property]);

  return (
    <div className="favourite-detail" style={{ marginTop: "60px" }}>
      <Link to="/favourites">
        <button
          type="submit"
          className="go-back-button"
          style={{
            height: "40px",
            backgroundColor: "#774872",
            color: "white",
            borderStyle: "none",
            fontSize: "16px",
            padding: "4px 6px",
            margin: "4px",
          }}
        >
          Back to Favourites
        </button>
      </Link>
      <PlantCard {...currentListing} />
    </div>
  );
};

export default FavouriteDetail;
