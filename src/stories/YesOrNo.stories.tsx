import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/inputs/yesOrNo";
import { theme } from "ccmtypes";
import YesOrNo from "../components/inputs/yesOrNo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/YesOrNo",
  component: YesOrNo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      type: "string",
    },
    theme: {},
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const YesOrNoInput: Story = {
  args: {
    label: "En attente de retour",
    theme,
  },
};

export const WithError: Story = {
  args: {
    label: "En attente de retour",
    theme,
    error: "Error message",
  },
};
