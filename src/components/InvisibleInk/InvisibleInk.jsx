/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InvisibleInk = ({ zero, one, two, three, four, five, six, seven, eight, nine, className }) => {
  return (
    <div className={`invisible-ink ${one} ${className}`}>
      <div className={`pixel-19 five-${five} seven-${seven} four-${four} three-${three} two-${two}`} />
      <div
        className={`pixel-20 five-0-${five} seven-0-${seven} one-${one} three-0-${three} two-0-${two} four-0-${four}`}
      />
      <div className={`pixel-21 five-1-${five} seven-1-${seven} three-1-${three} two-1-${two} one-0-${one}`} />
      <div className={`pixel-22 six-${six} one-1-${one} five-2-${five} seven-2-${seven}`} />
      <div
        className={`pixel-23 five-3-${five} six-0-${six} seven-3-${seven} eight-${eight} nine-${nine} one-2-${one} three-2-${three} two-2-${two}`}
      />
      <div
        className={`pixel-24 three-3-${three} six-1-${six} eight-0-${eight} nine-0-${nine} two-3-${two} one-3-${one} seven-4-${seven} five-4-${five} zero-${zero} four-1-${four}`}
      />
      <div
        className={`pixel-25 five-5-${five} seven-5-${seven} one-4-${one} four-2-${four} nine-1-${nine} three-4-${three}`}
      />
      <div
        className={`pixel-26 five-6-${five} four-3-${four} one-5-${one} two-4-${two} three-5-${three} seven-6-${seven}`}
      />
      {one === "off" && seven === "off" && (
        <>
          <div className={`pixel-27 four-4-${four} five-7-${five}`} />
          <div className={`pixel-28 four-5-${four} five-8-${five}`} />
        </>
      )}

      {(two === "on" || five === "on") && <div className={`pixel-29 two-5-${two} five-9-${five}`} />}

      {five === "on" && <div className="pixel-30" />}
    </div>
  );
};

InvisibleInk.propTypes = {
  zero: PropTypes.oneOf(["off", "on"]),
  one: PropTypes.oneOf(["off", "on"]),
  two: PropTypes.oneOf(["off", "on"]),
  three: PropTypes.oneOf(["off", "on"]),
  four: PropTypes.oneOf(["off", "on"]),
  five: PropTypes.oneOf(["off", "on"]),
  six: PropTypes.oneOf(["off", "on"]),
  seven: PropTypes.oneOf(["off", "on"]),
  eight: PropTypes.oneOf(["off", "on"]),
  nine: PropTypes.oneOf(["off", "on"]),
};
