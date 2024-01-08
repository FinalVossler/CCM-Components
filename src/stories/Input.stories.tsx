import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/inputs/input";
import { theme } from "ccmtypes";
import SearchIcon from "../components/icons/SearchIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input",
  component: Input,
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
export const Basic: Story = {
  args: {
    label: "Titre de la réclamation",
    placeholder: "Titre",
    theme,
  },
};

export const Disabled: Story = {
  args: {
    label: "Titre de la réclamation",
    placeholder: "Titre",
    theme,
    disabled: true,
    value: "disabled value",
  },
};

export const MaxCharacters: Story = {
  args: {
    label: "Titre de la réclamation",
    placeholder: "Titre",
    theme,
    maxCharacters: 30,
  },
};

export const WithSuffixIcon: Story = {
  args: {
    label: "Titre de la réclamation",
    placeholder: "Titre",
    theme,

    suffixIcon: (props) => (
      <SearchIcon {...props} style={{ top: -1, position: "relative" }} />
    ),
  },
};

export const withoutLabelButWithMaxCharacters: Story = {
  args: {
    placeholder: "Titre",
    theme,
    maxCharacters: 30,
  },
};

export const withoutLabelButWithSuffixIcon: Story = {
  args: {
    placeholder: "Titre",
    theme,
    suffixIcon: (props) => (
      <SearchIcon {...props} style={{ top: -1.5, position: "relative" }} />
    ),
  },
};

export const withError: Story = {
  args: {
    label: "With error",
    placeholder: "Titre",
    theme,
    suffixIcon: (props) => (
      <SearchIcon {...props} style={{ top: -1.5, position: "relative" }} />
    ),
    error: "Error message",
  },
};

export const withErrorButWithoutLabel: Story = {
  args: {
    placeholder: "Titre",
    theme,
    error: "Error message",
  },
};
