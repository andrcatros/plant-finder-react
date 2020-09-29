import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import qs from "qs";

const PlantSearchBar = () => {
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
    console.log(searchQuery);
    const newSearchQuery = buildQueryString("query", {
      description: { $regex: searchQuery },
    });

    history.push(newSearchQuery);

    setSearchQuery("");
  };

  // handle resetting search
  const handleReset = (e) => {
    e.preventDefault();
    history.push("/all-plants");
  };

  return (
    <div className="PlantSearchBar">
      <form onSubmit={handleSearch}>
        <label>
          Search plant description:
          <input
            name="description"
            id="description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </form>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default PlantSearchBar;
