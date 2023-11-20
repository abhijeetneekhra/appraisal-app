import React from "react";
import { Footer } from "../../components/Footer";
import { InputLabel } from "../../components/InputLabel";
import { PrimaryColor } from "../../components/PrimaryColor";
import "./UpdatedInstruction.css";

export const UpdatedInstruction = () => {
  return (
    <div className="updated-instruction">
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
          <div className="overlap-2">
            <div className="group-2">
              <InputLabel
                className="input-label-instance"
                text="Instructions"
              />
              <img className="logo" alt="Logo" src="/img/logo-5-1.png" />
              <img className="line" alt="Line" src="/img/line-2.svg" />
              <PrimaryColor
                className="secondary-color"
                divClassName="primary-color-instance"
                text="ok"
              />
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="text-wrapper-3">1</div>
                <p className="text-wrapper-4">
                  Please read the form carefully before you start filling.
                </p>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="text-wrapper-3">2</div>
                <p className="text-wrapper-4">
                  Please try to complete your form at one go.
                </p>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="text-wrapper-3">3</div>
                <p className="text-wrapper-5">
                  In case you have to leave your form incomplete, than click
                  &#34;Save as Draft&#34; button.
                </p>
              </div>
            </div>
            <div className="group-4">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="text-wrapper-3">4</div>
                <p className="text-wrapper-5">
                  Yo may refer to FAQs in case you seek clarity.
                </p>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="text-wrapper-3">5</div>
                <p className="text-wrapper-5">
                  Do not hesitate to call at 9990270016 or send a mail at
                  ask@sisindia.com
                </p>
              </div>
            </div>
            <div className="group-6">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="text-wrapper-3">6</div>
                <p className="in-case-form-is-not">
                  In case Form is not loaded/displayed properly, press
                  &#34;Refresh Button&#34; of browser or Re-login.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
