/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icons10 = ({ color = "#1F1F22", className }) => {
  return (
    <svg
      className={`icons-10 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="12" cy="12" r="5" stroke={color} strokeWidth="1.5" />
      <path className="path" d="M12 19.5V22" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M12 2V4.5" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M4.5 12L2 12" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M22 12L19.5 12" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      <path
        className="path"
        d="M17.3033 6.6967L19.0711 4.92893"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M4.92893 19.0711L6.6967 17.3033"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M17.3033 17.3033L19.0711 19.071"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M4.92896 4.92891L6.69672 6.69668"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icons10.propTypes = {
  color: PropTypes.string,
};
