import React from "react";
import { Footer } from "../../components/Footer";
import { InputLabel } from "../../components/InputLabel";
import { Placeholder } from "../../components/Placeholder";
import { PrimaryColor } from "../../components/PrimaryColor";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
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
                text="Enter address here"
              />
            </div>
            <div className="placeholder-wrapper">
              <Placeholder
                className="placeholder-instance"
                text="Enter password here"
              />
            </div>
            <div className="overlap-group-2">
              <div className="text-wrapper-4">Forgot Your Password?</div>
              <div className="text-wrapper-5">Click here to Reset</div>
            </div>
            <div className="text-wrapper-6">Remember me</div>
            <InputLabel className="input-label-instance" text="Email Address" />
            <InputLabel className="input-label-2" text="Password" />
            <img className="logo" alt="Logo" src="/img/logo-5-1.png" />
            <img className="line" alt="Line" src="/img/line-2.svg" />
            <div className="rectangle-2" />
            <PrimaryColor
              className="secondary-color"
              divClassName="primary-color-instance"
              text="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
