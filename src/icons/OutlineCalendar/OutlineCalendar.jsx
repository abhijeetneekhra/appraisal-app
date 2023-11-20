/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const OutlineCalendar = ({ className }) => {
  return (
    <svg
      className={`outline-calendar ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.0081 15.0079C15.0081 15.2853 14.9067 15.5199 14.7041 15.7119C14.5121 15.9039 14.2774 15.9999 14.0001 15.9999H2.00006C1.73339 15.9999 1.49872 15.8986 1.29606 15.6959C1.10406 15.5039 1.00806 15.2746 1.00806 15.0079V1.99994H3.50406V-6.10352e-05H4.49606V1.99994H11.5041V-6.10352e-05H12.4961V1.99994H15.0081V15.0079ZM2.00006 4.99194H14.0001V2.99194H2.00006V4.99194ZM2.00006 15.0079H14.0001V5.99994H2.00006V15.0079ZM12.0001 13.9999V12.9919H13.0081V13.9999H12.0001Z"
        fill="#474747"
      />
    </svg>
  );
};
