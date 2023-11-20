import { SpacingVertical } from ".";

export default {
  title: "Components/SpacingVertical",
  component: SpacingVertical,
  argTypes: {
    size: {
      options: [
        "two-px-spacing1",
        "eight-px-spacing3",
        "twenty-px-spacing6",
        "twenty-four-px-spacing7",
        "twelve-px-spacing4",
        "sixteen-px-spacing5",
        "thirty-two-px",
        "four-px-spacing2",
        "forty-eight-px-spacing8",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "two-px-spacing1",
    className: {},
    hasInvisibleInk: true,
    invisibleInkClassName: {},
  },
};
