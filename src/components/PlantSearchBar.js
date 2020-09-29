import React from "react";

const PlantSearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="PlantSearchBar">
      <form onSubmit={handleSubmit}>
        <label>
          Search plant description:
          <input name="description" id="description" />
        </label>
      </form>
    </div>
  );
};

export default PlantSearchBar;
