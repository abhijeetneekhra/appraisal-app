/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { InvisibleInk } from "../InvisibleInk";
import "./style.css";

export const SpacingHorizontal = ({ size, className, hasInvisibleInk = true }) => {
  return (
    <div className={`spacing-horizontal ${size} ${className}`}>
      {size === "forty-eight-px-spacing8" && (
        <div className="div">
          <InvisibleInk
            eight="off"
            five="off"
            four="on"
            nine="off"
            one="off"
            seven="off"
            six="off"
            three="off"
            two="off"
            zero="off"
          />
          <InvisibleInk
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
      )}

      {(size === "eight-px-spacing3" ||
        size === "sixteen-px-spacing5" ||
        size === "thirty-two-px" ||
        size === "twelve-px-spacing4" ||
        size === "twenty-four-px-spacing7" ||
        size === "twenty-px-spacing6" ||
        size === "two-px-spacing1") && (
        <>
          <>
            {hasInvisibleInk && (
              <>
                <>
                  {[
                    "sixteen-px-spacing5",
                    "thirty-two-px",
                    "twelve-px-spacing4",
                    "twenty-four-px-spacing7",
                    "twenty-px-spacing6",
                    "two-px-spacing1",
                  ].includes(size) && (
                    <div className="invisible-ink-6">
                      {[
                        "sixteen-px-spacing5",
                        "thirty-two-px",
                        "twelve-px-spacing4",
                        "twenty-four-px-spacing7",
                        "twenty-px-spacing6",
                      ].includes(size) && (
                        <>
                          <InvisibleInk
                            eight="off"
                            five="off"
                            four="off"
                            nine="off"
                            one={["sixteen-px-spacing5", "twelve-px-spacing4"].includes(size) ? "on" : "off"}
                            seven="off"
                            six="off"
                            three={size === "thirty-two-px" ? "on" : "off"}
                            two={["twenty-four-px-spacing7", "twenty-px-spacing6"].includes(size) ? "on" : "off"}
                            zero="off"
                          />
                          <InvisibleInk
                            eight="off"
                            five="off"
                            four={size === "twenty-four-px-spacing7" ? "on" : "off"}
                            nine="off"
                            one="off"
                            seven="off"
                            six={size === "sixteen-px-spacing5" ? "on" : "off"}
                            three="off"
                            two={["thirty-two-px", "twelve-px-spacing4"].includes(size) ? "on" : "off"}
                            zero={size === "twenty-px-spacing6" ? "on" : "off"}
                          />
                        </>
                      )}
                    </div>
                  )}

                  {size === "eight-px-spacing3" && (
                    <InvisibleInk
                      className="invisible-ink-instance"
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
                  )}
                </>
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

SpacingHorizontal.propTypes = {
  size: PropTypes.oneOf([
    "two-px-spacing1",
    "eight-px-spacing3",
    "twenty-px-spacing6",
    "twenty-four-px-spacing7",
    "twelve-px-spacing4",
    "sixteen-px-spacing5",
    "thirty-two-px",
    "four-px-spacing2",
    "forty-eight-px-spacing8",
  ]),
  hasInvisibleInk: PropTypes.bool,
};
