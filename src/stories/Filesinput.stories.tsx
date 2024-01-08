import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Button from "../components/button";
import { ButtonTypeEnum } from "../components/button/Button";
import PlusIcon from "../components/icons/PlusIcon";
import FilesInput from "../components/filesInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/FilesInput",
  component: FilesInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof FilesInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SingleFile: Story = {
  args: {
    theme,
    buttonProps: {
      label: "Ajouter une pièce jointe ici",
    },
    isMulti: false,
  },
};

export const MultipleFiles: Story = {
  args: {
    theme,
    buttonProps: {
      label: "Ajouter une pièce jointe ici",
    },
    isMulti: true,
  },
};
