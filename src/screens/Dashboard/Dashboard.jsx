import React from "react";
import { DefaultAvatar } from "../../components/DefaultAvatar";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Profile } from "../../components/Profile";
import { SpacingHorizontal } from "../../components/SpacingHorizontal";
import { TypePrimaryState } from "../../components/TypePrimaryState";
import { Icons1 } from "../../icons/Icons1";
import { Icons2 } from "../../icons/Icons2";
import { Icons3 } from "../../icons/Icons3";
import { Icons4 } from "../../icons/Icons4";
import { Icons5 } from "../../icons/Icons5";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="header-default">
          <div className="overlap-group-3">
            <div className="right-side">
              <SpacingHorizontal
                className="spacing-horizontal-spacer"
                hasInvisibleInk={false}
                size="eight-px-spacing3"
              />
              <SpacingHorizontal
                className="spacing-horizontal-spacer"
                hasInvisibleInk={false}
                size="eight-px-spacing3"
              />
              <DefaultAvatar
                className="avatar"
                initials="ZS"
                initialsClassName="design-component-instance-node-3"
              />
            </div>
            <div className="client">BEL007233 - Dashboard</div>
          </div>
        </div>
        <Footer
          className="footer-instance"
          contentShort="© 2023 PwC. All rights reserved. Neural info solutions Pvt. Ltd."
          divClassName="footer-3"
          dividerClassName="footer-2"
          dividerClassNameOverride="footer-2"
          elementPwcAllRighClassName="footer-2"
          link1="Privacy policy"
          link2="Terms and conditions"
          link3="Cookie notice"
          linkClassName="footer-3"
          linkClassNameOverride="footer-3"
          mode="light-mode"
          spacingVerticalHasContainer={false}
          spacingVerticalHasInvisibleInk={false}
          type="link"
        />
        <div className="overlap">
          <p className="text-wrapper-8">
            Hi Zaid! Welcome to the AFCL Appraisal System
          </p>
          <Profile className="profile-instance" />
        </div>
        <div className="text-wrapper-9">Appraisal Form</div>
        <div className="frame">
          <div className="overlap-2">
            <div className="group">
              <div className="overlap-group-4">
                <p className="text-wrapper-10">
                  Graphical view of my appraisal form grading
                </p>
                <div className="div-3" />
                <TypePrimaryState
                  buttonClassName="type-primary-state-default-focus-area-not-applicable-autolayout-true-mode-light-mode"
                  className="default-button"
                  text="SELF APPRAISA"
                  textClassName="design-component-instance-node-3"
                  visible={false}
                  visible1={false}
                />
              </div>
            </div>
            <div className="group-2">
              <img
                className="shape-with-text"
                alt="Shape with text"
                src="/img/shape-with-text-1.svg"
              />
              <img
                className="img"
                alt="Shape with text"
                src="/img/shape-with-text.svg"
              />
              <img className="final" alt="Final" src="/img/final.svg" />
              <img
                className="half-yeary"
                alt="Half yeary"
                src="/img/half-yeary.svg"
              />
              <img
                className="connector-line"
                alt="Connector line"
                src="/img/connector-line-1.png"
              />
              <img className="line" alt="Line" src="/img/line-1.svg" />
              <div className="text-wrapper-11">100</div>
              <div className="text-wrapper-12">200</div>
              <div className="text-wrapper-13">300</div>
              <div className="text-wrapper-14">400</div>
              <div className="text-wrapper-15">500</div>
            </div>
            <p className="text-wrapper-16">
              Graphical view of my appraisal form
            </p>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-3">
            <div className="div-3">
              <TypePrimaryState
                buttonClassName="type-primary-state-default-focus-area-not-applicable-autolayout-true-mode-light-mode"
                className="type-primary-state-instance"
                text="CONTROLLING OFFICER&#39;S GRADING"
                textClassName="design-component-instance-node-3"
                visible={false}
                visible1={false}
              />
            </div>
            <p className="text-wrapper-17">Graphical view of my CO</p>
            <div className="group-2">
              <img
                className="shape-with-text-2"
                alt="Shape with text"
                src="/img/shape-with-text-1.svg"
              />
              <img
                className="shape-with-text-3"
                alt="Shape with text"
                src="/img/shape-with-text.svg"
              />
              <img className="final-2" alt="Final" src="/img/final.svg" />
              <img
                className="half-yeary-2"
                alt="Half yeary"
                src="/img/half-yeary.svg"
              />
              <img
                className="connector-line-2"
                alt="Connector line"
                src="/img/connector-line-1.png"
              />
              <img className="line" alt="Line" src="/img/line-1.svg" />
              <div className="text-wrapper-11">100</div>
              <div className="text-wrapper-12">200</div>
              <div className="text-wrapper-13">300</div>
              <div className="text-wrapper-14">400</div>
              <div className="text-wrapper-15">500</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-3">
            <div className="div-3">
              <TypePrimaryState
                buttonClassName="type-primary-state-default-focus-area-not-applicable-autolayout-true-mode-light-mode"
                className="type-primary-state-default-focus-area-not-applicable-autolayout-true-mode-light-mode-instance"
                text="REVIEWING OFFICER&#39;S GRADING"
                textClassName="design-component-instance-node-3"
                visible={false}
                visible1={false}
              />
            </div>
            <p className="graphical-view-of-my"> Graphical view of my RO</p>
            <div className="group-2">
              <img
                className="shape-with-text-4"
                alt="Shape with text"
                src="/img/shape-with-text-1.svg"
              />
              <img
                className="shape-with-text-5"
                alt="Shape with text"
                src="/img/shape-with-text.svg"
              />
              <img className="final-3" alt="Final" src="/img/final.svg" />
              <img
                className="half-yeary-3"
                alt="Half yeary"
                src="/img/half-yeary.svg"
              />
              <img
                className="connector-line-3"
                alt="Connector line"
                src="/img/connector-line.png"
              />
              <img className="line" alt="Line" src="/img/line-1.svg" />
              <div className="text-wrapper-11">100</div>
              <div className="text-wrapper-12">200</div>
              <div className="text-wrapper-13">300</div>
              <div className="text-wrapper-14">400</div>
              <div className="text-wrapper-15">500</div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <p className="pending-employees">
            Pending Employees Appraisal Forms for Controlling Officer&#39;s
            Grading
          </p>
          <div className="overlap-4">
            <div className="text-wrapper-18">Total Employees :</div>
            <div className="text-wrapper-19">Completed :</div>
          </div>
        </div>
        <div className="group-4">
          <p className="pending-employees">
            Pending Employees Appraisal Forms for Reviewing Officer&#39;s
            Grading
          </p>
          <div className="overlap-5">
            <div className="text-wrapper-18">Total Employees :</div>
            <div className="text-wrapper-19">Completed :</div>
          </div>
        </div>
        <Menu
          className="menu-instance"
          listManuIcon={<Icons1 className="icons-2" />}
          listManuIcon1={<Icons3 className="icons-2" />}
          listManuIcon2={<Icons4 className="icons-2" />}
          listManuIcon3={<Icons5 className="icons-2" />}
          listManuIcons12Color="#4F4F4F"
          override={<Icons2 className="icons-2" />}
        />
      </div>
    </div>
  );
};
