import React from "react";
import PropTypes from "prop-types";

import StyledAlert from "../styles/styled-alert";

const Alert = ({ message, success }) => {
  if (!message) {
    return null;
  }

  return (
    <StyledAlert color={success ? "green" : "red"}>{message}!</StyledAlert>
  );
};

Alert.propTypes = {
  success: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
