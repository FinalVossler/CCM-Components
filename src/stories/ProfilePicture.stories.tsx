import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import ProfilePicture from "../components/ProfilePicture";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ProfilePicture",
  component: ProfilePicture,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof ProfilePicture>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    theme,
    firstName: "Hamza",
    lastName: "Khalifa",
  },
};

export const WithAction: Story = {
  args: {
    theme,
    firstName: "Hamza",
    lastName: "Khalifa",
    action: {
      actionTitle: "Suivre le dossier",
      onClick: () => {},
    },
  },
};

export const WithFullFirstAndLastName: Story = {
  args: {
    theme,
    firstName: "Hamza",
    lastName: "Khalifa",
    withFullFirstNameAndLast: true,
  },
};

export const WithActionAndFullFirstNameAndLastName: Story = {
  args: {
    theme,
    firstName: "Hamza",
    lastName: "Khalifa",
    action: {
      actionTitle: "Suivre le dossier",
      onClick: () => {},
    },
    withFullFirstNameAndLast: true,
  },
};
