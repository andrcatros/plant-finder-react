import React from "react";

import "../styles/Alert.css";

const Alert = ({ message, success }) => {
  if (!message) {
    return null;
  }

  let alertColor;

  console.log(success);

  success ? (alertColor = "green") : (alertColor = "red");

  return (
    <div
      className="Alert"
      style={{
        borderStyle: "solid",
        backgroundColor: `${alertColor}`,
        borderColor: `${alertColor}`,
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
