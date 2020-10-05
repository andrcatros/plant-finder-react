import React from "react";
import "../styles/PlantCard.css";

const PlantCard = ({ email, description, name, category, img, plantBy }) => {
  let displayImg;

  if (!img || img === "default") {
    displayImg = "/placeholder.jpg";
  } else {
    displayImg = img;
  }

  return (
    <div className="PlantCard">
      <h2>{name}</h2>
      <img src={`${displayImg}`} alt="placeholder for plants" />
      <div className="PlantCard-text">
        posted by <b>{plantBy}</b> <br /> {/* link to profile page !!!!  */}
        <div className="PlantCard-text-description"> {description} </div>
        Category: {category} <br /> {/* link to search by categories  */}
        <a href={`mailto:${email}?subject=Plant Swap`}>
          <button type="button" className="email-button">
            Email to Swap
          </button>
        </a>
      </div>
    </div>
  );
};

export default PlantCard;
