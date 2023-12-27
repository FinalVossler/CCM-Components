import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Status from "../components/status";
import { StatusTypeEnum } from "../components/status/Status";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Status",
  component: Status,
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
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  args: {
    label: "Info Here",
    theme,
    statusType: StatusTypeEnum.Info,
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    theme,
    statusType: StatusTypeEnum.Success,
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    theme,
    statusType: StatusTypeEnum.Danger,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    theme,
    statusType: StatusTypeEnum.Warning,
  },
};
