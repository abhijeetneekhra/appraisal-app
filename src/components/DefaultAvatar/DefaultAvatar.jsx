/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DefaultAvatar = ({ showFocus = false, initials = "AB", className, initialsClassName }) => {
  return (
    <div className={`default-avatar ${className}`}>
      <div className={`initials ${initialsClassName}`}>{initials}</div>
    </div>
  );
};

DefaultAvatar.propTypes = {
  showFocus: PropTypes.bool,
  initials: PropTypes.string,
};
