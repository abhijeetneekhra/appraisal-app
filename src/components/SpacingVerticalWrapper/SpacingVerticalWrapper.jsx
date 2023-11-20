/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { InvisibleInk } from "../InvisibleInk";
import "./style.css";

export const SpacingVerticalWrapper = ({ className, invisibleInkElementOnOffOffClassName }) => {
  return (
    <div className={`spacing-vertical-wrapper ${className}`}>
      <InvisibleInk
        className={invisibleInkElementOnOffOffClassName}
        eight="on"
        five="off"
        four="off"
        nine="off"
        one="off"
        seven="off"
        six="off"
        three="off"
        two="off"
        zero="off"
      />
    </div>
  );
};
