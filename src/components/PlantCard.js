import React from "react";

const PlantCard = ({ email, description, name, category, img }) => {
  let displayImg;

  if (!img || img === "default") {
    displayImg = "/placeholder.jpg";
  }
  return (
    <div className="PlantCard">
      <img
        src={displayImg}
        alt="placeholder for plants with no uploaded image"
        style={{ width: "80vw" }}
      />
      {email}, {description}, {name}, {category}{" "}
    </div>
  );
};

export default PlantCard;
