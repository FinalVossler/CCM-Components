import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import MoreButtons from "../components/moreButtons/index";
import DuplicateIcon from "../components/icons/DuplicateIcon";
import CrossIcon from "../components/icons/CrossIcon";
import MergeIcon from "../components/icons/MergeIcon";
import { MoreButtonsDotsTypeEnum } from "../components/moreButtons/MoreButtons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/MoreButtons",
  component: MoreButtons,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof MoreButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TopLeft: Story = {
  args: {
    theme,
    buttons: [
      {
        icon: (props) => (
          <CrossIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Annuler la demande",
      },
      {
        icon: (props) => (
          <MergeIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Fusionner",
      },
      {
        icon: (props) => (
          <DuplicateIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Dupliquer",
      },
    ],
  },
};

export const TopRight: Story = {
  args: {
    theme,
    style: {
      position: "absolute",
      right: 15,
    },
    buttons: [
      {
        icon: (props) => (
          <CrossIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Annuler la demande",
      },
      {
        icon: (props) => (
          <MergeIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Fusionner",
      },
      {
        icon: (props) => (
          <DuplicateIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Dupliquer",
      },
    ],
  },
};

export const BottomLeft: Story = {
  args: {
    theme,
    style: {
      position: "absolute",
      bottom: 15,
    },
    buttons: [
      {
        icon: (props) => (
          <CrossIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Annuler la demande",
      },
      {
        icon: (props) => (
          <MergeIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Fusionner",
      },
      {
        icon: (props) => (
          <DuplicateIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Dupliquer",
      },
    ],
  },
};

export const BottomRight: Story = {
  args: {
    theme,
    style: {
      position: "absolute",
      bottom: 15,
      right: 15,
    },
    buttons: [
      {
        icon: (props) => (
          <CrossIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Annuler la demande",
      },
      {
        icon: (props) => (
          <MergeIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Fusionner",
      },
      {
        icon: (props) => (
          <DuplicateIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Dupliquer",
      },
    ],
  },
};

export const Vertical: Story = {
  args: {
    theme,
    type: MoreButtonsDotsTypeEnum.Vertical,
    tooltipMessage: "This is the tooltip content",

    buttons: [
      {
        icon: (props) => (
          <CrossIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Annuler la demande",
      },
      {
        icon: (props) => (
          <MergeIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Fusionner",
      },
      {
        icon: (props) => (
          <DuplicateIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Dupliquer",
      },
    ],
  },
};

export const TopLeftWithTooltip: Story = {
  args: {
    theme,
    tooltipMessage: "This is the tooltip content",
    buttons: [
      {
        icon: (props) => (
          <CrossIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Annuler la demande",
      },
      {
        icon: (props) => (
          <MergeIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Fusionner",
      },
      {
        icon: (props) => (
          <DuplicateIcon {...props} style={{ position: "relative", top: 2 }} />
        ),
        text: "Dupliquer",
      },
    ],
  },
};
