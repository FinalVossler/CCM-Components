import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Button from "../components/button";
import { ButtonTypeEnum } from "../components/button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Confirm: Story = {
  args: {
    label: "Clôturer la demande",
    theme,
    buttonType: ButtonTypeEnum.Confirm,
  },
};

export const Cancel: Story = {
  args: {
    label: "Annuler la demande",
    theme,
    buttonType: ButtonTypeEnum.Cancel,
  },
};
