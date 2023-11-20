/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons10 } from "../../icons/Icons10";
import { Icons9 } from "../../icons/Icons9";
import "./style.css";

export const SwitchToggle = ({ state, className }) => {
  return (
    <div className={`switch-toggle ${className}`}>
      <div className={`overlap-group-2 state-${state}`}>
        <div className="knob" />
        {state === "on" && <Icons9 className="icons-9" />}

        {state === "off" && <Icons10 className="icons-8" color="#1F1F22" />}
      </div>
    </div>
  );
};

SwitchToggle.propTypes = {
  state: PropTypes.oneOf(["off", "on"]),
};
