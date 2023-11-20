import React from "react";
import { DefaultAvatar } from "../../components/DefaultAvatar";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { SpacingHorizontal } from "../../components/SpacingHorizontal";
import { Icons1 } from "../../icons/Icons1";
import { Icons2 } from "../../icons/Icons2";
import { Icons3 } from "../../icons/Icons3";
import { Icons4 } from "../../icons/Icons4";
import { Icons5 } from "../../icons/Icons5";
import "./Kpi.css";

export const Kpi = () => {
  return (
    <div className="KPI-screen-part-a">
      <div className="overlap-wrapper">
        <div className="overlap">
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
              <div className="client">Profile</div>
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
          <div className="overlap-2">
            <Menu
              className="menu-instance"
              listManuIcon={<Icons1 className="icons-2" />}
              listManuIcon1={<Icons3 className="icons-2" />}
              listManuIcon2={<Icons4 className="icons-2" />}
              listManuIcon3={<Icons5 className="icons-2" />}
              listManuIcons12Color="#4F4F4F"
              logo="/img/logo-5-1-1.png"
              override={<Icons2 className="icons-2" />}
            />
            <div className="group" />
            <p className="text-wrapper-2">
              Part - A Section V of GOPAL KRISHNA SINHA
            </p>
            <div className="text-wrapper-3">
              Performance Reviewing Section V
            </div>
            <div className="text-wrapper-4">
              Performance Reviewing Section V
            </div>
            <div className="group-2">
              <div className="ellipse" />
              <p className="text-wrapper-5">
                Too soon to rate(less then 3 months)
              </p>
            </div>
            <div className="group-3">
              <div className="roles">Roles &amp; Responsibilities</div>
              <div className="overlap-3">
                <div className="text-wrapper-6">Maximum Possible Score :</div>
                <div className="text-wrapper-7">Marks Scored :</div>
                <div className="text-wrapper-8">Marks Scored by CO:</div>
                <div className="text-wrapper-9">Marks Scored by RO:</div>
                <div className="text-wrapper-10">Percentage Score :</div>
                <div className="group-4">
                  <div className="group-5">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-11">(HY)</div>
                      <div className="div-2" />
                    </div>
                    <div className="text-wrapper-12">(FY)</div>
                    <div className="group-6" />
                  </div>
                  <div className="group-7">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-11">(HY)</div>
                      <div className="div-2" />
                    </div>
                    <div className="text-wrapper-12">(FY)</div>
                    <div className="group-6" />
                  </div>
                  <div className="group-8">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-11">(HY)</div>
                      <div className="div-2" />
                    </div>
                    <div className="text-wrapper-12">(FY)</div>
                    <div className="group-6" />
                  </div>
                  <div className="group-9">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-11">(HY)</div>
                      <div className="div-2" />
                    </div>
                    <div className="text-wrapper-12">(FY)</div>
                    <div className="group-6" />
                  </div>
                  <div className="group-10">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-11">(HY)</div>
                      <div className="div-2" />
                    </div>
                    <div className="text-wrapper-12">(FY)</div>
                    <div className="group-6" />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-13">
                Key Performance Indicators (KPIs)
              </div>
              <div className="text-wrapper-14">Evaluation By Self</div>
              <div className="text-wrapper-15">Evaluation By CO</div>
              <div className="text-wrapper-16">Evaluation By RMC</div>
              <div className="overlap-4">
                <div className="overlap-5">
                  <div className="text-wrapper-17">Target</div>
                  <div className="text-wrapper-18">Actual</div>
                  <div className="text-wrapper-19">Achieved</div>
                </div>
                <div className="self-comment">Self&nbsp;&nbsp;Comment</div>
                <div className="text-wrapper-20">Achived by CO</div>
                <div className="overlap-6">
                  <div className="text-wrapper-21">CO Comment</div>
                  <div className="text-wrapper-22">Achived by CO</div>
                  <div className="group-11">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="group-12">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-5">
                          <img
                            className="frame"
                            alt="Frame"
                            src="/img/frame-9.svg"
                          />
                          <div className="div-2" />
                          <div className="text-wrapper-23">2</div>
                        </div>
                      </div>
                      <div className="group-13">
                        <div className="overlap-group-5">
                          <img
                            className="frame"
                            alt="Frame"
                            src="/img/frame-9.svg"
                          />
                          <div className="div-2" />
                          <div className="text-wrapper-23">2</div>
                        </div>
                      </div>
                      <div className="group-14">
                        <div className="overlap-group-5">
                          <img
                            className="frame"
                            alt="Frame"
                            src="/img/frame-9.svg"
                          />
                          <div className="div-2" />
                          <div className="text-wrapper-23">2</div>
                        </div>
                      </div>
                    </div>
                    <div className="group-15">
                      <div className="group-16" />
                      <div className="group-17">
                        <div className="overlap-group-5">
                          <img
                            className="frame"
                            alt="Frame"
                            src="/img/frame-9.svg"
                          />
                          <div className="div-2" />
                          <div className="text-wrapper-23">2</div>
                        </div>
                      </div>
                    </div>
                    <div className="group-18">
                      <div className="group-16" />
                      <div className="group-19">
                        <div className="overlap-group-5">
                          <img
                            className="frame"
                            alt="Frame"
                            src="/img/frame-9.svg"
                          />
                          <div className="div-2" />
                          <div className="text-wrapper-23">2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-20">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="group-12">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-14">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-15">
                  <div className="group-16" />
                  <div className="group-17">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-18">
                  <div className="group-16" />
                  <div className="group-19">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-21">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="group-12">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-14">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-15">
                  <div className="group-16" />
                  <div className="group-17">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-18">
                  <div className="group-16" />
                  <div className="group-19">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-22">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="group-12">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-14">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-15">
                  <div className="group-16" />
                  <div className="group-17">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-18">
                  <div className="group-16" />
                  <div className="group-19">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-23">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="group-12">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-14">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-15">
                  <div className="group-16" />
                  <div className="group-17">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9-6.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-18">
                  <div className="group-16" />
                  <div className="group-19">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-24">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="group-12">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-14">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-15">
                  <div className="group-16" />
                  <div className="group-17">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9-6.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-18">
                  <div className="group-16" />
                  <div className="group-19">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-25">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="group-12">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                  <div className="group-14">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-15">
                  <div className="group-16" />
                  <div className="group-17">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9-1.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-18">
                  <div className="group-16" />
                  <div className="group-19">
                    <div className="overlap-group-5">
                      <img
                        className="frame"
                        alt="Frame"
                        src="/img/frame-9.svg"
                      />
                      <div className="div-2" />
                      <div className="text-wrapper-23">2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="normal-default">
            <div className="button-sample">Save as draft</div>
          </div>
          <div className="button-sample-wrapper">
            <div className="button-sample">Save as Send</div>
          </div>
          <div className="normal-default-2">
            <div className="button-sample-2">Reset</div>
          </div>
          <button className="button">
            <button className="button-sample-3">Next</button>
          </button>
        </div>
      </div>
    </div>
  );
};
