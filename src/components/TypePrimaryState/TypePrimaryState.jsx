/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { OutlinePlus1 } from "../../icons/OutlinePlus1";
import { SpacingVerticalWrapper } from "../SpacingVerticalWrapper";
import "./style.css";

export const TypePrimaryState = ({
  className,
  buttonClassName,
  visible = true,
  textClassName,
  text = "Label",
  visible1 = true,
}) => {
  return (
    <div className={`type-primary-state ${className}`}>
      <button className={`button ${buttonClassName}`}>
        <div className="icon-text">
          {visible && <OutlinePlus1 className="outline-plus" color="white" />}

          <div className={`text-2 ${textClassName}`}>{text}</div>
        </div>
        {visible1 && (
          <SpacingVerticalWrapper
            className="spacing-vertical-spacer-8px-spacing3-horizontal"
            invisibleInkElementOnOffOffClassName="spacing-vertical-spacer-8px-spacing3-horizontal-instance"
          />
        )}
      </button>
    </div>
  );
};

TypePrimaryState.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.string,
  visible1: PropTypes.bool,
};
