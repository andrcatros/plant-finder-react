import React from "react";

import { useHistory } from "react-router-dom";

const GoBackButton = ({ path }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <div className="Go-Back-Button">
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default GoBackButton;
