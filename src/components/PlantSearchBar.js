import React, { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import qs from "qs";

import "../styles/PlantSearchBar.css";

const PlantSearchBar = () => {
  const { search } = useLocation();
  //  const [searchQuery, setSearchQuery] = useState("");
  //  const history = useHistory();

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

  // handle search input form
  {
    /* const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    const newSearchQuery = buildQueryString("query", {
      description: { $regex: searchQuery },
    });

    history.push(newSearchQuery);

    setSearchQuery("");
  };*/
  }

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
