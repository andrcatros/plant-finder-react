import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import PlantCard from "./PlantCard";
import PlantSearchBar from "./PlantSearchBar";

import "../styles/AllPlants.css";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const { search } = useLocation();

  console.log(search);

  // initial render
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://plant-finder-api.herokuapp.com/api/v1/plants")
        .then((res) => setPlants(res.data))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  // re-render on search
  /* useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://plant-finder-api.herokuapp.com/api/v1/plants${search}`)
        .then((res) => setPlants(res.data))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, [search]);*/

  return (
    <div className="AllPlants">
      <PlantSearchBar />
      <div className="AllPlants-container">
        {plants.map((plant) => (
          <PlantCard
            key={plant._id}
            email={plant.User.email}
            name={plant.name}
            plantBy={plant.User.name}
            description={plant.description}
            category={plant.category}
            img={plant.img}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
