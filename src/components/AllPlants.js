import React, { useEffect, useState } from "react";
import axios from "axios";

import PlantCard from "./PlantCard";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://plant-finder-api.herokuapp.com/api/v1/plants")
        .then((res) => setPlants(res.data))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  console.log(plants[0]);

  return (
    <div className="AllPlants">
      this is AllPlants
      {plants.map((plant) => (
        <PlantCard
          key={plant._id}
          email={plant.User.email}
          name={plant.name}
          description={plant.description}
          category={plant.category}
        />
      ))}
    </div>
  );
};

export default AllPlants;
