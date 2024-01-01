import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import EmailBoxes from "../components/emailBoxes";
import { EmailBoxViewTypeEnum } from "../components/emailBoxes/EmailBoxes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/EmailBoxes",
  component: EmailBoxes,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof EmailBoxes>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    theme,
    newEmailBoxTitle: "Nouveau mail",
    boxes: [
      { viewType: EmailBoxViewTypeEnum.Reduced, title: "Nouveau mail" },
      { viewType: EmailBoxViewTypeEnum.Reduced, title: "Nouveau mail" },
    ],
    sendEmailButtonProps: {
      label: "Nouveau Mail",
      withoutBorder: true,
    },
  },
};
