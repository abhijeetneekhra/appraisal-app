/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { InvisibleInk } from "../InvisibleInk";
import "./style.css";

export const SpacingVertical = ({ size, className, hasInvisibleInk = true, invisibleInkClassName }) => {
  return (
    <div className={`spacing-vertical ${size} ${className}`}>
      {(size === "eight-px-spacing3" ||
        size === "forty-eight-px-spacing8" ||
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
                  {(size === "forty-eight-px-spacing8" ||
                    size === "sixteen-px-spacing5" ||
                    size === "thirty-two-px" ||
                    size === "twelve-px-spacing4" ||
                    size === "twenty-four-px-spacing7" ||
                    size === "twenty-px-spacing6" ||
                    size === "two-px-spacing1") && (
                    <div className={`invisible-ink-6 ${invisibleInkClassName}`}>
                      {[
                        "forty-eight-px-spacing8",
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
                            four={size === "forty-eight-px-spacing8" ? "on" : "off"}
                            nine="off"
                            one={["sixteen-px-spacing5", "twelve-px-spacing4"].includes(size) ? "on" : "off"}
                            seven="off"
                            six="off"
                            three={size === "thirty-two-px" ? "on" : "off"}
                            two={["twenty-four-px-spacing7", "twenty-px-spacing6"].includes(size) ? "on" : "off"}
                            zero="off"
                          />
                          <InvisibleInk
                            eight={size === "forty-eight-px-spacing8" ? "on" : "off"}
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

SpacingVertical.propTypes = {
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
