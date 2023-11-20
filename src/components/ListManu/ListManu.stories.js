import { ListManu } from ".";

export default {
  title: "Components/ListManu",
  component: ListManu,
  argTypes: {
    state: {
      options: ["default"],
      control: { type: "select" },
    },
    viewport: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLabel: true,
    showIcons: true,
    label: "Label",
    state: "default",
    viewport: "desktop",
    className: {},
    icons12Color: "#2A2A2E",
    textClassName: {},
  },
};
