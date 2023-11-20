import React from "react";
import { Footer } from "../../components/Footer";
import { InputLabel } from "../../components/InputLabel";
import { Placeholder } from "../../components/Placeholder";
import { PrimaryColor } from "../../components/PrimaryColor";
import "./changePassword.css";
import leftArrow from "./changePassword.css";

const ChangePassword = () => {
  return (
    <div className="change-password">
      <div className="div-2">
        <div className="overlap">
          <img className="group" alt="Group" src="/img/group-207.png" />
          <div className="text-wrapper-3">Appraisal App</div>
          <img
            className="rectangle"
            alt="Rectangle"
            src="/img/rectangle-2881.png"
          />
        </div>
        <div className="overlap-group">
          <Footer
            className="footer-instance"
            contentShort="© 2023 PwC. All rights reserved. Neural info solutions Pvt. Ltd."
            divClassName="footer-2"
            dividerClassName="design-component-instance-node"
            dividerClassNameOverride="design-component-instance-node"
            elementPwcAllRighClassName="design-component-instance-node"
            link1="Privacy policy"
            link2="Terms and conditions"
            link3="Cookie notice"
            linkClassName="footer-2"
            linkClassNameOverride="footer-2"
            mode="light-mode"
            spacingVerticalHasContainer={false}
            spacingVerticalHasInvisibleInk={false}
            type="link"
          />
          <div className="group-2">
            <div className="form">
              <Placeholder
                className="placeholder-instance"
                divClassName="placeholder-2"
                text="Enter registered email address here"
              />
            </div>
            <div className="form-2">
              <Placeholder
                className="placeholder-3"
                divClassName="placeholder-4"
                text="Back"
              />
              {/* <img
                className="left-arrow"
                alt="Left arrow"
                src="/img/left-arrow.png"
              /> */}
              <img src={leftArrow} alt="leftArrow2" />
            </div>
            <div className="overlap-group-2">
              <p className="text-wrapper-4">
                We will sent an verification code to the email address.
              </p>
              <InputLabel
                className="input-label-instance"
                text="Reset Password"
              />
            </div>
            <InputLabel className="input-label-2" text="Email Address" />
            <img className="logo" alt="Logo" src="/img/logo-5-1.png" />
            <img className="line" alt="Line" src="/img/line-2.svg" />
            <PrimaryColor
              className="secondary-color"
              divClassName="primary-color-instance"
              text="Send verification code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
