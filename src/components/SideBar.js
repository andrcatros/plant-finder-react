import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StyledSideBar from "../styles/styled-sidebar";

const SideBar = () => {
  const { search } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

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
  const handleSearch = (e) => {
    e.preventDefault();
    const newSearchQuery = buildQueryString("query", {
      title: { $regex: searchQuery },
    });

    history.push(newSearchQuery);

    setSearchQuery("");
  };

  // handle resetting search

  const handleReset = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <StyledSideBar>
      <form onSubmit={handleSearch}>
        <label htmlFor="title-search">
          <input
            id="title-search"
            name="title-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </label>
      </form>
      <ul className="sidebar-links" style={{ padding: "0px" }}>
        <h4>Sort by City</h4>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
        <h4>Sort by</h4>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
      </ul>
      <button
        type="submit"
        onClick={handleReset}
        style={{ width: "90%", fontSize: "16px", marginLeft: "10px" }}
      >
        reset search
      </button>
    </StyledSideBar>
  );
};

export default SideBar;
