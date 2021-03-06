import React from "react";
import { useLocation, Link } from "react-router-dom";
import qs from "qs";

import "../styles/PlantSearchBar.css";

const PlantSearchBar = () => {
  const { search } = useLocation();

  // create query string
  const buildQueryString = (operation, valueObj) => {
    const query = qs.parse(search, {
      ignoreQueryPrefix: true,
    });

    const newQuery = {
      ...query,
      [operation]: JSON.stringify({
        ...JSON.parse(query[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQuery, { addQueryPrefix: true, encode: false });
  };

  return (
    <div className="PlantSearchBar">
      <li>
        <Link to={"/all-plants"}>All</Link>
      </li>
      <li>
        <Link to={buildQueryString("query", { category: "Houseplant" })}>
          Houseplant
        </Link>
      </li>
      <li>
        <Link to={buildQueryString("query", { category: "Seeds and Bulbs" })}>
          Seeds & Bulbs
        </Link>
      </li>
      <li>
        <Link to={buildQueryString("query", { category: "Seedling" })}>
          Seedling
        </Link>
      </li>
      <li>
        <Link
          to={buildQueryString("query", { category: "Pots and Containers" })}
        >
          Pots & Containers
        </Link>
      </li>
      <li>
        <Link to={buildQueryString("query", { category: "Other" })}>Other</Link>
      </li>
    </div>
  );
};

export default PlantSearchBar;
