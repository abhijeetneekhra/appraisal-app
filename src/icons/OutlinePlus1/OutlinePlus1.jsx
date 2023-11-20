/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const OutlinePlus1 = ({ color = "#474747", className }) => {
  return (
    <svg
      className={`outline-plus-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_2_560)">
        <path
          className="path"
          d="M7.504 7.504V0H8.496V7.504H16V8.496H8.496V16H7.504V8.496H0V7.504H7.504Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_2_560">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

OutlinePlus1.propTypes = {
  color: PropTypes.string,
};
