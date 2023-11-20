/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryColor = ({ className, divClassName, text = "Button Sample" }) => {
  return (
    <div className={`primary-color ${className}`}>
      <div className={`button-sample ${divClassName}`}>{text}</div>
    </div>
  );
};

PrimaryColor.propTypes = {
  text: PropTypes.string,
};
