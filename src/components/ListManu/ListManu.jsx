/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons12 } from "../../icons/Icons12";
import "./style.css";

export const ListManu = ({
  showLabel = true,
  showIcons = true,
  label = "Label",
  state,
  viewport,
  className,
  icons12Color = "#2A2A2E",
  textClassName,
  icon = <Icons12 className="icons" color={icons12Color} />,
}) => {
  return (
    <div className={`list-manu ${viewport} ${className}`}>
      {viewport === "desktop" && (
        <div className="content">
          {icon}
          <div className={`text-3 ${textClassName}`}>{label}</div>
        </div>
      )}

      {viewport === "mobile" && <Icons12 className="icons" color="#2A2A2E" />}
    </div>
  );
};

ListManu.propTypes = {
  showLabel: PropTypes.bool,
  showIcons: PropTypes.bool,
  label: PropTypes.string,
  state: PropTypes.oneOf(["default"]),
  viewport: PropTypes.oneOf(["desktop", "mobile"]),
  icons12Color: PropTypes.string,
};
