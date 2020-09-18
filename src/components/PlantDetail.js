import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import listingPlaceholder from "../styles/listing-placeholder.jpg";

const PlantDetail = ({
  title,
  img,
  name,
  type,
  description,
  category,
  user,
  price,
}) => {
  return (
    <div className="plant-detail">
      <img src={listingPlaceholder} alt="placeholder" />
      <span data-testid="listing-title-test">
        <b>{title}</b>
      </span>
      <br />
      <span>
        <i>{type}</i>
      </span>{" "}
      -{" "}
      <span>
        <i>{city}</i>
      </span>
      <br />
      <span title={bathroomTitle}>
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </span>
      {"  "}
      <span title={bedroomTitle}>
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </span>
      <br />
      <span>£{parseInt(price, 10).toLocaleString()}</span>
      <br />
      <a href={`mailto:${email}`} data-testid="listing-email-test">
        <button type="button" className="email-button">
          <FontAwesomeIcon icon={faEnvelope} /> Email{" "}
        </button>
      </a>
    </div>
  );
};

export default PlantDetail;
