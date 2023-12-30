import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonTypeEnum } from "../components/button/Button";
import ModalButton from "../components/modal/ModalButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ModalButton",
  component: ModalButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ModalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const What: React.FunctionComponent = () => {
  return <div></div>;
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    buttonProps: {
      label: "Modal",
      buttonType: ButtonTypeEnum.Default,
    },
    modalProps: {
      title: "Vous êtes sur le point de clôturer la réclamation",
      cancelText: "Annuler",
      confirmText: "Valider",
    },
  },
};
