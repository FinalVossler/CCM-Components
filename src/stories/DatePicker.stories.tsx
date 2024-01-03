import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "ccmtypes";

import DatePicker from "../components/inputs/datePicker";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/DatePicker",
  component: DatePicker,
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
    showTimeSelect: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    label: "Date de fin de cible",
    placeholder: "fin cible",
    theme,
    showTimeSelect: false,
  },
};

export const WithTime: Story = {
  args: {
    label: "Résolution estimée",
    placeholder: "estimation",
    theme,
    showTimeSelect: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Résolution estimée",
    placeholder: "estimation",
    theme,
    error: "Error message",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "estimation",
    theme,
  },
};

export const WithoutLabelButWithError: Story = {
  args: {
    placeholder: "estimation",
    theme,
    error: "Error message",
  },
};

export const DateRange: Story = {
  args: {
    label: "Date de fin de cible",
    placeholder: "fin cible",
    theme,
    showTimeSelect: false,
    isARangePicker: true,
  },
};

export const DateRangeWithTime: Story = {
  args: {
    label: "Résolution estimée",
    placeholder: "estimation",
    theme,
    showTimeSelect: true,
    isARangePicker: true,
  },
};

export const DateRangeWithError: Story = {
  args: {
    label: "Résolution estimée",
    placeholder: "estimation",
    theme,
    error: "Error message",
    isARangePicker: true,
  },
};

export const DateRangeWithoutLabel: Story = {
  args: {
    placeholder: "estimation",
    theme,
    isARangePicker: true,
  },
};

export const DateRangeWithoutLabelButWithError: Story = {
  args: {
    placeholder: "estimation",
    theme,
    error: "Error message",
    isARangePicker: true,
  },
};
