import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Tabs from "../components/tabs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    theme,
    options: [
      {
        title: "Emails",
      },
      {
        title: "Les demandes",
      },
      {
        title: "Activités",
      },
      {
        title: "Mon Dashboard",
      },
    ],
  },
};

export const ManyOptions: Story = {
  args: {
    theme,
    options: [
      {
        title: "Emails",
      },
      {
        title: "Les demandes",
      },
      {
        title: "Activités",
      },
      {
        title: "Mon Dashboard",
      },
      {
        title: "Emails 2",
      },
      {
        title: "Les demandes 2",
      },
      {
        title: "Activités 2",
      },
      {
        title: "Mon Dashboard 2",
      },
    ],
  },
};
