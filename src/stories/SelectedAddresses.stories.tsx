import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import SelectedAddresses from "../components/selectedAddresses";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SelectedAddresses",
  component: SelectedAddresses,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
    title: {
      type: "string",
    },
    numberOfSelectedAddressesTitle: {
      type: "string",
    },
  },
} satisfies Meta<typeof SelectedAddresses>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    theme,
    title: "Sélection boites mail",
    numberOfSelectedAddressesTitle: "2 Sélectionnées",
  },
};
