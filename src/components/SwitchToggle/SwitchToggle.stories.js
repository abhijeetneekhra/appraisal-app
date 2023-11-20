import { SwitchToggle } from ".";

export default {
  title: "Components/SwitchToggle",
  component: SwitchToggle,
  argTypes: {
    state: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "off",
    className: {},
  },
};
