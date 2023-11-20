import React from "react";
import { DefaultAvatar } from "../../components/DefaultAvatar";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { SpacingHorizontal } from "../../components/SpacingHorizontal";
import { Icons1 } from "../../icons/Icons1";
import { Icons17 } from "../../icons/Icons17";
import { Icons3 } from "../../icons/Icons3";
import { Icons4 } from "../../icons/Icons4";
import { Icons5 } from "../../icons/Icons5";
import { OutlineCalendar } from "../../icons/OutlineCalendar";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
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
            <p className="client">
              <span className="span">Profile/</span>
              <span className="text-wrapper-2">प्रोफ़ाइल</span>
            </p>
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
        <Menu
          className="menu-instance"
          listManuDivClassName="menu-2"
          listManuDivClassNameOverride="menu-2"
          listManuIcon={<Icons1 className="icons-2" />}
          listManuIcon1={<Icons3 className="icons-2" />}
          listManuIcon2={<Icons4 className="icons-2" />}
          listManuIcon3={<Icons5 className="icons-2" />}
          listManuIcons12Color="#4F4F4F"
          listManuLabel="डैशबोर्ड"
          listManuLabel1="मूल्यांकन अनुभाग"
          listManuLabel2="सूचनाएं"
          listManuLabel3="एनालिटिक्स"
          listManuLabel4="मदद"
          listManuTextClassName="menu-2"
          listManuTextClassName1="menu-2"
          listManuTextClassNameOverride="menu-2"
          logo="/img/logo-5-1-1.png"
          override={<Icons17 className="icons-2" />}
        />
        <div className="overlap">
          <div className="group" />
          <p className="general-information">
            <span className="span">
              General Information, Educational and Experience Details
            </span>
            <span className="text-wrapper-3">
              /सामान्य जानकारी, शैक्षिक और अनुभव विवरण
            </span>
          </p>
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
          <div className="frame">
            <div className="overlap-2">
              <div className="group-wrapper">
                <div className="group-2">
                  <p className="general-information-2">
                    <span className="span">General Information Section I</span>
                    <span className="text-wrapper-3">
                      /जनरल इनफार्मेशन सेक्शन 1{" "}
                    </span>
                  </p>
                  <div className="group-3">
                    <div className="text-wrapper-4">Name/पूरा नाम</div>
                    <div className="input-field">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">गोपाल कृष्ण सिन्हा</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-4">
                    <p className="registration-number">
                      <span className="span">Registration Number</span>
                      <span className="text-wrapper-3">/रजिस्ट्रेशन नंबर </span>
                    </p>
                    <div className="input-field-2">
                      <div className="react-field-wrapper">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">PAT063219</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-5">
                    <p className="text-wrapper-5">
                      Educational/Professional Qualification/लाइसेंस के साथ
                      ड्राइविंग कौशल
                    </p>
                    <div className="input-field-3">
                      <div className="imput-field-2">
                        <div className="ap-field-container-wrapper">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">चार पहिया</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-6">
                    <p className="present-position">
                      <span className="span">
                        Present Position/ Designation
                      </span>
                      <span className="text-wrapper-3">
                        /वर्तमान स्थिति/पदनाम
                      </span>
                    </p>
                    <div className="input-field-4">
                      <div className="imput-field-3">
                        <div className="react-field-2">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">
                                सहायक महाप्रबंधक (एचआरडी)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-7">
                    <p className="date-of-appointment">
                      <span className="span">Date of Appointment</span>
                      <span className="text-wrapper-3">
                        /अपॉइंटमेंट की तिथि
                      </span>
                    </p>
                    <div className="input-field-5">
                      <div className="imput-field-3">
                        <div className="react-field-2">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">06/03/07</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-8">
                    <p className="terms-of-employment">
                      <span className="span">
                        Terms of Employment (Regular/Contractual)
                      </span>
                      <span className="text-wrapper-3">
                        /रोज़गार की शर्त (नियमित/संविदा)
                      </span>
                    </p>
                    <div className="input-field-5">
                      <div className="imput-field-3">
                        <div className="react-field-2">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">स्थायी</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-9">
                    <div className="text-wrapper-6">
                      Educational/Professional Qualification/एजुकेशन/ प्रोफेशनल
                      योग्यता
                    </div>
                    <p className="marital-status">
                      <span className="span">Marital Status/</span>
                      <span className="text-wrapper-3">
                        मैरिटल स्टेटस /मैरिटल स्टेटस{" "}
                      </span>
                    </p>
                    <div className="overlap-3">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-4">
                          <div className="imput-field-4">
                            <div className="react-field-3" />
                          </div>
                          <div className="ap-field-input-2">
                            <p className="text-4">
                              बी.एससी, एमए (सामाजिक मनोविज्ञान),
                              एलएलबी/पीजीडीबीएम (एचआरडी) 2. एलएलएम
                            </p>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right"
                        alt="Right"
                        src="/img/right-24px-25.png"
                      />
                    </div>
                    <div className="input-field-6">
                      <div className="imput-field-5">
                        <div className="react-field-4">
                          <div className="text-4">4 ए</div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-7">
                      <div className="text-5">विवाहित</div>
                    </div>
                    <p className="band-rank">
                      <span className="span">Band/Rank</span>
                      <span className="text-wrapper-3">बैंड /रैंक </span>
                    </p>
                  </div>
                  <div className="group-10">
                    <p className="DOB">
                      <span className="span">DOB</span>
                      <span className="text-wrapper-3">/डी. ओ. बी. </span>
                    </p>
                    <div className="overlap-4">
                      <div className="input-field-8">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">21/01/76</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="icon">
                        <OutlineCalendar className="outline-calendar" />
                      </div>
                    </div>
                  </div>
                  <div className="group-11">
                    <p className="position-held-from">
                      <span className="span">Position Held From</span>
                      <span className="text-wrapper-3">/धारित पद से </span>
                    </p>
                    <div className="input-field-9">
                      <div className="imput-field-6">
                        <div className="react-field-5">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-6">1/6/2009</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-12">
                    <p className="place-of-posting">
                      <span className="span">Place of Posting</span>
                      <span className="text-wrapper-3">/पोस्टिंग की जगह</span>
                    </p>
                    <div className="input-field-10">
                      <div className="imput-field-7">
                        <div className="react-field-6">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-6">
                                एसआईएस कॉर्पोरेट कार्यालय, दिल्ली
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-13">
                    <p className="date-of-confirmation">
                      <span className="span">Date of Confirmation</span>
                      <span className="text-wrapper-3">/पुष्टिकरण की तिथि</span>
                    </p>
                    <div className="imput-field-wrapper">
                      <div className="imput-field-8">
                        <div className="react-field-7">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-6">5/3/2008</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-14">
                    <p className="due-date-of">
                      <span className="span">Due date of Superannuation</span>
                      <span className="text-wrapper-3">
                        /सेवानिवृत्ति की नियत तिथि
                      </span>
                    </p>
                    <div className="input-field-11">
                      <div className="imput-field-9">
                        <div className="react-field-8">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">20/1/2036</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="right-px" alt="Right" src="/img/right-24px.svg" />
            </div>
            <div className="overlap-5">
              <div className="frame-2">
                <div className="group-15">
                  <div className="text-wrapper-7">To/तक</div>
                  <div className="text-wrapper-8">Form/से</div>
                  <div className="text-wrapper-9">Industry/उद्योग</div>
                  <div className="text-wrapper-10">Designation/पद का नाम</div>
                  <p className="experience-profile">
                    <span className="span">
                      Experience Profile (Prior to SIS) Section III / अनुभव{" "}
                    </span>
                    <span className="text-wrapper-2">प्रोफ़ाइल</span>
                    <span className="span"> (एसआईएस से पहले) अनुभाग III</span>
                  </p>
                  <div className="text-wrapper-11">
                    Organization Details/संगठन विवरण
                  </div>
                  <div className="group-16">
                    <div className="group-17">
                      <div className="overlap-group-4">
                        <div className="input-field-12">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">2011</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img"
                          alt="Right"
                          src="/img/right-24px-20.png"
                        />
                      </div>
                    </div>
                    <div className="overlap-wrapper">
                      <div className="overlap-group-4">
                        <div className="input-field-12">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">2011</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img"
                          alt="Right"
                          src="/img/right-24px-19.png"
                        />
                      </div>
                    </div>
                    <div className="input-field-wrapper">
                      <div className="input-field-13">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-7">Kanpur University</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-18">
                      <div className="input-field-13">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-19">
                      <div className="input-field-14">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-7">Designer</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-20">
                    <div className="group-17">
                      <div className="overlap-group-4">
                        <div className="input-field-12">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">2011</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img"
                          alt="Right"
                          src="/img/right-24px-20.png"
                        />
                      </div>
                    </div>
                    <div className="overlap-wrapper">
                      <div className="overlap-group-4">
                        <div className="input-field-12">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">2011</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img"
                          alt="Right"
                          src="/img/right-24px-19.png"
                        />
                      </div>
                    </div>
                    <div className="input-field-wrapper">
                      <div className="input-field-13">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-7">Kanpur University</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-18">
                      <div className="input-field-13">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-19">
                      <div className="input-field-14">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-7">Designer</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-21">
                    <div className="group-17">
                      <div className="overlap-group-4">
                        <div className="input-field-12">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">2011</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img"
                          alt="Right"
                          src="/img/right-24px-20.png"
                        />
                      </div>
                    </div>
                    <div className="overlap-wrapper">
                      <div className="overlap-group-4">
                        <div className="input-field-12">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">2011</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img"
                          alt="Right"
                          src="/img/right-24px-19.png"
                        />
                      </div>
                    </div>
                    <div className="input-field-wrapper">
                      <div className="input-field-13">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-7">Kanpur University</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-18">
                      <div className="input-field-13">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-19">
                      <div className="input-field-14">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-7">Designer</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-3">
                <div className="group-22">
                  <div className="text-wrapper-12">Form/से</div>
                  <div className="text-wrapper-13">To/तक</div>
                  <div className="text-wrapper-14">Designation/पद का नाम</div>
                  <p className="brand">
                    <span className="span">Brand/</span>
                    <span className="text-wrapper-2">ब्रांड</span>
                  </p>
                  <p className="text-wrapper-15">
                    Band Held From/बैंड से आयोजित
                  </p>
                  <div className="overlap-6">
                    <p className="text-wrapper-16">
                      Place Of Posting/पोस्टिंग की जगह
                    </p>
                    <p className="CO">
                      <span className="span">CO/</span>
                      <span className="text-wrapper-2">नियंत्रण अधिकारी</span>
                    </p>
                  </div>
                  <div className="text-wrapper-17">RMC/ आरएमसी</div>
                  <p className="experience-profile-2">
                    <span className="span">
                      Experience Profile (in SIS) Section IV/अनुभव{" "}
                    </span>
                    <span className="text-wrapper-2">प्रोफ़ाइल</span>
                    <span className="span">
                      {" "}
                      (एसआईएस में) अनुभाग IV&nbsp;&nbsp;{" "}
                    </span>
                  </p>
                  <div className="group-23">
                    <div className="group-24">
                      <div className="group-25">
                        <div className="overlap-group-4">
                          <div className="input-field-15">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input">
                                    <div className="text-7">2011</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-2"
                            alt="Right"
                            src="/img/right-24px-3.png"
                          />
                        </div>
                      </div>
                      <div className="group-26">
                        <div className="overlap-group-4">
                          <div className="input-field-16">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input">
                                    <div className="text-7">2011</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-3"
                            alt="Right"
                            src="/img/right-24px-2.png"
                          />
                        </div>
                      </div>
                      <div className="group-27">
                        <div className="input-field-17">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">
                                    Kanpur University
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-28">
                        <div className="overlap-group-4">
                          <div className="input-field-18">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input-3" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-4"
                            alt="Right"
                            src="/img/right-24px-1.png"
                          />
                        </div>
                      </div>
                      <div className="group-29">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-30">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-31">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-32">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-33">
                      <div className="group-25">
                        <div className="overlap-group-4">
                          <div className="input-field-15">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input">
                                    <div className="text-7">2011</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-2"
                            alt="Right"
                            src="/img/right-24px-3.png"
                          />
                        </div>
                      </div>
                      <div className="group-26">
                        <div className="overlap-group-4">
                          <div className="input-field-16">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input">
                                    <div className="text-7">2011</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-3"
                            alt="Right"
                            src="/img/right-24px-2.png"
                          />
                        </div>
                      </div>
                      <div className="group-27">
                        <div className="input-field-17">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">
                                    Kanpur University
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-28">
                        <div className="overlap-group-4">
                          <div className="input-field-18">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input-3" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-4"
                            alt="Right"
                            src="/img/right-24px-1.png"
                          />
                        </div>
                      </div>
                      <div className="group-29">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-30">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-31">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-32">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-34">
                      <div className="group-25">
                        <div className="overlap-group-4">
                          <div className="input-field-15">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input">
                                    <div className="text-7">2011</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-2"
                            alt="Right"
                            src="/img/right-24px-3.png"
                          />
                        </div>
                      </div>
                      <div className="group-26">
                        <div className="overlap-group-4">
                          <div className="input-field-16">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input">
                                    <div className="text-7">2011</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-3"
                            alt="Right"
                            src="/img/right-24px-2.png"
                          />
                        </div>
                      </div>
                      <div className="group-27">
                        <div className="input-field-17">
                          <div className="imput-field">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">
                                    Kanpur University
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-28">
                        <div className="overlap-group-4">
                          <div className="input-field-18">
                            <div className="imput-field">
                              <div className="react-field">
                                <div className="ap-field-container">
                                  <div className="ap-field-input-3" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="right-4"
                            alt="Right"
                            src="/img/right-24px-1.png"
                          />
                        </div>
                      </div>
                      <div className="group-29">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-30">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-31">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-32">
                        <div className="input-field-19">
                          <div className="imput-field-10">
                            <div className="react-field">
                              <div className="ap-field-container">
                                <div className="ap-field-input">
                                  <div className="text-7">Designer</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="group-35">
                <p className="education-profile">
                  <span className="span">Education Profile Section II</span>
                  <span className="text-wrapper-3">
                    /शिक्षा प्रोफाइल अनुभाग II
                  </span>
                </p>
                <div className="group-36">
                  <div className="group-37">
                    <p className="qualification">
                      <span className="span">Qualification</span>
                      <span className="text-wrapper-3">/योग्यता</span>
                    </p>
                    <div className="input-field-20">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">एलएलएम</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-21">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">एमए (सोशल साइको)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-22">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">पीजीडीबीएम (एचआरडी)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-23">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">एल.एल.बी.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-24">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">बीएससी</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-25">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">इंटरमीडिएट</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-26">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">हाई स्कूल</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-27">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container" />
                        </div>
                      </div>
                    </div>
                    <div className="input-field-28">
                      <div className="imput-field">
                        <div className="react-field-9" />
                      </div>
                    </div>
                  </div>
                  <div className="group-38">
                    <p className="year-of-passing">
                      <span className="span">Year of Passing</span>
                      <span className="text-wrapper-3">
                        /उत्तीर्ण होने का वर्ष
                      </span>
                    </p>
                    <div className="overlap-7">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">1990</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-16.svg"
                      />
                    </div>
                    <div className="overlap-group-5">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">1990</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-16.svg"
                      />
                    </div>
                    <div className="overlap-8">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">1990</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-16.svg"
                      />
                    </div>
                    <div className="overlap-9">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">1990</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-14.svg"
                      />
                    </div>
                    <div className="overlap-10">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">1990</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-14.svg"
                      />
                    </div>
                    <div className="overlap-11">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">1990</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-13.svg"
                      />
                    </div>
                    <div className="overlap-12">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field">
                            <div className="ap-field-container">
                              <div className="ap-field-input">
                                <div className="text-4">1990</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-10.png"
                      />
                    </div>
                    <div className="overlap-13">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field-9" />
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-10.png"
                      />
                    </div>
                    <div className="overlap-14">
                      <div className="input-field-29">
                        <div className="imput-field">
                          <div className="react-field-9" />
                        </div>
                      </div>
                      <img
                        className="right-5"
                        alt="Right"
                        src="/img/right-24px-10.png"
                      />
                    </div>
                  </div>
                  <div className="group-39">
                    <p className="institute-university">
                      <span className="span">Institute/University-</span>
                      <span className="text-wrapper-3">
                        संस्थान/विश्वविद्यालय
                      </span>
                    </p>
                    <div className="input-field-30">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <p className="text-4">
                                बुन्देल खण्ड विश्वविद्यालय झाँसी इलाहाबाद
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-31">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">कानपुर विश्वविद्यालय</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-32">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">आई.एम.पी. कानपुर</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-33">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">कानपुर विश्वविद्यालय</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-34">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">कानपुर विश्वविद्यालय</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-35">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">यू० पी० बोर्ड</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-36">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">यू० पी० बोर्ड</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-37">
                      <div className="imput-field">
                        <div className="react-field-9" />
                      </div>
                    </div>
                    <div className="input-field-38">
                      <div className="imput-field">
                        <div className="react-field-9" />
                      </div>
                    </div>
                  </div>
                  <div className="group-40">
                    <p className="percentage-grade">
                      <span className="span">Percentage/Grade(%)-</span>
                      <span className="text-wrapper-3">/प्रतिशत/ग्रेड(%)</span>
                    </p>
                    <div className="input-field-39">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">63%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-40">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">70%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-41">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">70%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-42">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">63%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-43">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">70%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-44">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">61%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-45">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container">
                            <div className="ap-field-input">
                              <div className="text-4">76%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-field-46">
                      <div className="imput-field">
                        <div className="react-field">
                          <div className="ap-field-container" />
                        </div>
                      </div>
                    </div>
                    <div className="input-field-47">
                      <div className="imput-field">
                        <div className="react-field-9" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
