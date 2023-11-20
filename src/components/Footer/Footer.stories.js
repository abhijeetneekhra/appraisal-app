import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    type: {
      options: ["link", "text"],
      control: { type: "select" },
    },
    mode: {
      options: ["light-mode", "dark-mode"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    link2: "Terms and conditions",
    link1: "Privacy policy",
    contentShort:
      "© 2022 PwC. All rights reserved. PwC refers to the US member firm of the PwC network or one of its subsidiaries or affiliates.",
    link3: "Cookie notice",
    contentLong:
      "© 2022 PwC. All rights reserved. Definition: PWC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. Please see www.pwc.com/structure for further details.",
    type: "link",
    mode: "light-mode",
    className: {},
    spacingVerticalHasInvisibleInk: true,
    elementPwcAllRighClassName: {},
    linkClassName: {},
    dividerClassName: {},
    linkClassNameOverride: {},
    dividerClassNameOverride: {},
    divClassName: {},
    spacingVerticalHasContainer: true,
  },
};
