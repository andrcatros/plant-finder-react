import React from "react";

const Alert = ({ message, success }) => {
  if (!message) {
    return null;
  }

  return (
    <div
      className="Alert"
      color={success ? "green" : "red"}
      style={{ borderStyle: "solid" }}
    >
      {message}
    </div>
  );
};

export default Alert;
