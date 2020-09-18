import React from "react";
import { Link } from "react-router-dom";

import StyledFavouriteCard from "../styles/styled-favourite-card";

const FavouriteCard = (props) => {
  const { favID, _id, title, handleDelete } = props;
  const onClick = (e) => {
    e.preventDefault();
    handleDelete(favID);
  };

  return (
    <StyledFavouriteCard>
      <Link to={`/favourites/detail?plant=${_id}`}>
        <b>Title</b>: {title}
      </Link>
      <button className="delete-button" type="button" onClick={onClick}>
        Delete
      </button>
    </StyledFavouriteCard>
  );
};

export default FavouriteCard;
