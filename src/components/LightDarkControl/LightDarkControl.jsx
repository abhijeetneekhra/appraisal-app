/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons10 } from "../../icons/Icons10";
import { SwitchToggle } from "../SwitchToggle";
import "./style.css";

export const LightDarkControl = ({
  className,
  icons10Color = "#C8BCF6",
  textClassName,
  text = "Light mode",
  visible = true,
}) => {
  return (
    <div className={`light-dark-control ${className}`}>
      <div className="content-2">
        <Icons10 className="icons-10" color={icons10Color} />
        <div className={`text-4 ${textClassName}`}>{text}</div>
      </div>
      {visible && <SwitchToggle className="switch-toggle-instance" state="off" />}
    </div>
  );
};

LightDarkControl.propTypes = {
  icons10Color: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool,
};
