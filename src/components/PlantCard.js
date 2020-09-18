import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import listingPlaceholder from "../styles/listing-placeholder.jpg";

import StyledPlantCard from "../styles/styled-plant-card";

const PlantCard = (props) => {
  const {
    _id,
    title,
    type,
    name,
    description,
    category,
    price,
    email,
    img
  } = props;
  const { userID, onSave } = props;
  // eslint-disable-next-line
  const Title = `${title}`;
  // eslint-disable-next-line
  const Type = `${type}`;

  return (
    <StyledPlantCard key={_id}>
      {img === "default" ? (
        <img src={listingPlaceholder} alt="placeholder" />
      ) : (
          <img
            src={`https://stormy-depths-48903.herokuapp.com/api/v2/Static${img}`}
            alt="real file"
          />
        )}
      <span data-testid="listing-title-test">
        <b>{title}</b>
      </span>
      <br />
      <span data-testid="listing-type-test">
        <i>{type}</i>
      </span>{" "}
      -{" "}
      <span data-testid="listing-city-test">
        <i>{category}</i>
      </span>
      <br />
      <span data-testid="listing-bathrooms-test" title={title}>
        <FontAwesomeIcon icon={faBath} /> {description}
      </span>
      {"  "}
      <span data-testid="listing-bedrooms-test" title={name}>
        <FontAwesomeIcon icon={faBed} /> {name}
      </span>
      <br />
      <span data-testid="listing-price-test">
        £{parseInt(price, 10).toLocaleString()}
      </span>
      <br />
      <a href={`mailto:${email}`} data-testid="listing-email-test">
        <button type="button" className="email-button">
          <FontAwesomeIcon icon={faEnvelope} /> Email{" "}
        </button>
      </a>
      {userID && (
        <button
          type="button"
          className="save-button"
          onClick={() => onSave(_id)}
        >
          {" "}
          <FontAwesomeIcon icon={faStar} /> Save{" "}
        </button>
      )}
    </StyledPlantCard>
  );
};

PlantCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string,
};

PlantCard.defaulProps = {
  userID: "",
};

export default PlantCard;
