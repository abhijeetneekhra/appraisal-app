import React from "react";
import { DefaultAvatar } from "../../components/DefaultAvatar";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { SpacingHorizontal } from "../../components/SpacingHorizontal";
import { Icons15 } from "../../icons/Icons15";
import { Icons16 } from "../../icons/Icons16";
import { Icons17 } from "../../icons/Icons17";
import { Icons18 } from "../../icons/Icons18";
import { Icons19 } from "../../icons/Icons19";
import "./UpdatedDashboard.css";

export const UpdatedDashboard = () => {
  return (
    <div className="updated-dashboard">
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
                initialsClassName="default-avatar-single"
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
          <div className="overlap-2">
            <p className="text-wrapper-2">
              Hi Zaid! Welcome to the AFCL Appraisal System
            </p>
            <div className="group">
              <div className="overlap-3">
                <div className="text-wrapper-3">Name :</div>
                <div className="text-wrapper-4">Designation :</div>
                <div className="text-wrapper-5">Branch :</div>
                <div className="text-wrapper-6">
                  Functional Controlling Officer
                </div>
                <div className="text-wrapper-7">
                  Administrative Controlling Officer :
                </div>
                <div className="text-wrapper-8">Reviewing Officer :</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <div className="text-wrapper-9">GOALS</div>
                <div className="text-wrapper-10">16</div>
              </div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-4">
              <div className="require-attention">REQUIRE ATTENTION</div>
              <div className="text-wrapper-11">16</div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-4">
            <div className="direct-report">
              DIRECT <br />
              REPORT
            </div>
            <div className="text-wrapper-12">16</div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-4">
            <div className="indirect-report">
              INDIRECT <br />
              REPORT
            </div>
            <div className="text-wrapper-13">16</div>
          </div>
        </div>
        <div className="frame">
          <div className="overlap-5">
            <div className="group-4">
              <div className="overlap-group-4">
                <p className="text-wrapper-14">
                  Graphical view of my appraisal form grading
                </p>
                <div className="rectangle" />
              </div>
            </div>
            <p className="text-wrapper-15">
              Graphical view of my appraisal form
            </p>
            <img className="image" alt="Image" src="/img/image-3.png" />
          </div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-16">Evaluation Stage</div>
          <img className="img" alt="Image" src="/img/image-1.png" />
        </div>
        <div className="frame-3">
          <div className="text-wrapper-17">Average Team Rating</div>
          <img className="image-2" alt="Image" src="/img/image-2.png" />
        </div>
        <div className="group-5">
          <p className="pending-employees">
            Pending Employees Appraisal Forms for Controlling Officer&#39;s
            Grading
          </p>
          <div className="overlap-6">
            <div className="text-wrapper-18">Total Employees :</div>
            <div className="text-wrapper-19">Completed :</div>
          </div>
        </div>
        <div className="group-6">
          <p className="pending-employees">
            Pending Employees Appraisal Forms for Reviewing Officer&#39;s
            Grading
          </p>
          <div className="overlap-7">
            <div className="text-wrapper-18">Total Employees :</div>
            <div className="text-wrapper-19">Completed :</div>
          </div>
        </div>
        <Menu
          className="menu-instance"
          listManuIcon={<Icons19 className="icons-2" />}
          listManuIcon1={<Icons17 className="icons-2" />}
          listManuIcon2={<Icons16 className="icons-2" />}
          listManuIcon3={<Icons15 className="icons-2" />}
          listManuIcons8Color="#4F4F4F"
          override={<Icons18 className="icons-2" />}
        />
      </div>
    </div>
  );
};
