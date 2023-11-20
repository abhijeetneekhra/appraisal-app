/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Profile = ({ className }) => {
  return (
    <div className={`profile ${className}`}>
      <div className="text-wrapper-2">Name :</div>
      <div className="text-wrapper-3">Designation :</div>
      <div className="text-wrapper-4">Branch :</div>
      <div className="text-wrapper-5">Functional Controlling Officer</div>
      <div className="text-wrapper-6">Administrative Controlling Officer :</div>
      <div className="text-wrapper-7">Reviewing Officer :</div>
    </div>
  );
};
