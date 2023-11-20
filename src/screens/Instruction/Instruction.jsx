import React from "react";
import { Footer } from "../../components/Footer";
import { InputLabel } from "../../components/InputLabel";
import { PrimaryColor } from "../../components/PrimaryColor";
import "./Instruction.css";

const Instruction = () => {
  return (
    <div className="instruction-page">
      <div className="div-2">
        <div className="overlap">
          <img className="group" alt="Group" src="/img/group-207.png" />
          <div className="text-wrapper-2">Appraisal App</div>
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
            <div className="flexcontainer">
              <p className="text-2">
                <span className="span">
                  Please read the form carefully before you start filling.
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="span">
                  Please try to complete your form at one go.
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="span">
                  In case you have to leave your form incomplete, than click
                  &#34;Save as Draft&#34; button.
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="span">
                  Yo may refer to FAQs in case you seek clarity.
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="span">Do not hesitate to call at </span>
                <span className="text-wrapper-3">9990270016</span>
                <span className="span"> or send a mail at </span>
                <span className="text-wrapper-3">
                  ask@sisindia.com
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="span">
                  In case Form is not loaded/displayed properly, press
                  &#34;Refresh Button&#34; of browser or Re-login.
                </span>
              </p>
            </div>
            <InputLabel className="input-label-instance" text="Instructions" />
            <img className="logo" alt="Logo" src="/img/logo-5-1.png" />
            <img className="line" alt="Line" src="/img/line-2.svg" />
            <PrimaryColor
              className="secondary-color"
              divClassName="primary-color-instance"
              text="ok"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
