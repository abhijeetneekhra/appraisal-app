/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SpacingVertical } from "../SpacingVertical";
import "./style.css";

export const Footer = ({
  link2 = "Terms and conditions",
  link1 = "Privacy policy",
  contentShort = "© 2022 PwC. All rights reserved. PwC refers to the US member firm of the PwC network or one of its subsidiaries or affiliates.",
  link3 = "Cookie notice",
  contentLong = "© 2022 PwC. All rights reserved. Definition: PWC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. Please see www.pwc.com/structure for further details.",
  type,
  mode,
  className,
  spacingVerticalHasInvisibleInk,
  elementPwcAllRighClassName,
  linkClassName,
  dividerClassName,
  linkClassNameOverride,
  dividerClassNameOverride,
  divClassName,
  spacingVerticalHasContainer,
}) => {
  return (
    <div className={`footer ${className}`}>
      {mode === "light-mode" && (
        <>
          <SpacingVertical
            className="spacing-vertical-instance"
            hasInvisibleInk={spacingVerticalHasInvisibleInk}
            invisibleInkClassName="spacing-vertical-spacer"
            size="twenty-four-px-spacing7"
          />
          <div className={`div ${type}`}>
            {type === "link" && (
              <>
                <p className={`element-pwc-all-righ ${elementPwcAllRighClassName}`}>{contentShort}</p>
                <div className="links">
                  <div className={`text-wrapper ${linkClassName}`}>{link1}</div>
                  <div className={`divider ${dividerClassName}`}>|</div>
                  <div className={`text-wrapper ${linkClassNameOverride}`}>{link2}</div>
                  <div className={`divider ${dividerClassNameOverride}`}>|</div>
                  <div className={`text-wrapper ${divClassName}`}>{link3}</div>
                </div>
              </>
            )}

            {type === "text" && <p className="text-wrapper-7">{contentLong}</p>}
          </div>
          <SpacingVertical
            className="spacing-vertical-instance"
            hasInvisibleInk={spacingVerticalHasContainer}
            invisibleInkClassName="spacing-vertical-spacer"
            size="twelve-px-spacing4"
          />
        </>
      )}

      {mode === "dark-mode" && (
        <>
          <div className="invisible-ink-wrapper">
            <div className="invisible-ink-2">
              <div className="invisible-ink-3">
                <div className="pixel" />
                <div className="pixel-2" />
                <div className="pixel-3" />
                <div className="pixel-4" />
                <div className="pixel-5" />
                <div className="pixel-6" />
                <div className="pixel-7" />
                <div className="pixel-8" />
                <div className="pixel-9" />
                <div className="pixel-10" />
                <div className="pixel-11" />
              </div>
              <div className="invisible-ink-3">
                <div className="pixel" />
                <div className="pixel-12" />
                <div className="pixel-13" />
                <div className="pixel-4" />
                <div className="pixel-14" />
                <div className="pixel-5" />
                <div className="pixel-6" />
                <div className="pixel-15" />
                <div className="pixel-16" />
                <div className="pixel-11" />
              </div>
            </div>
          </div>
          <div className={`link-2 type-${type}`}>
            {type === "link" && (
              <>
                <p className={`p ${elementPwcAllRighClassName}`}>{contentShort}</p>
                <div className="links">
                  <div className={`link-3 ${linkClassName}`}>{link1}</div>
                  <div className={`divider-2 ${dividerClassName}`}>|</div>
                  <div className={`link-3 ${linkClassNameOverride}`}>{link2}</div>
                  <div className={`divider-2 ${dividerClassNameOverride}`}>|</div>
                  <div className={`link-3 ${divClassName}`}>{link3}</div>
                </div>
              </>
            )}

            {type === "text" && <p className="text-wrapper-7">{contentLong}</p>}
          </div>
          <div className="div-wrapper">
            <div className="invisible-ink-4">
              <div className="invisible-ink-5">
                <div className="pixel-2" />
                <div className="pixel-13" />
                <div className="pixel-17" />
                <div className="pixel-5" />
                <div className="pixel-18" />
                <div className="pixel-8" />
                <div className="pixel-9" />
                <div className="pixel-10" />
              </div>
              <div className="invisible-ink-3">
                <div className="pixel" />
                <div className="pixel-2" />
                <div className="pixel-3" />
                <div className="pixel-4" />
                <div className="pixel-5" />
                <div className="pixel-6" />
                <div className="pixel-7" />
                <div className="pixel-8" />
                <div className="pixel-9" />
                <div className="pixel-10" />
                <div className="pixel-11" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Footer.propTypes = {
  link2: PropTypes.string,
  link1: PropTypes.string,
  contentShort: PropTypes.string,
  link3: PropTypes.string,
  contentLong: PropTypes.string,
  type: PropTypes.oneOf(["link", "text"]),
  mode: PropTypes.oneOf(["light-mode", "dark-mode"]),
  spacingVerticalHasInvisibleInk: PropTypes.bool,
  spacingVerticalHasContainer: PropTypes.bool,
};
