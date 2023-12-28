import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/inputs/input";
import { theme } from "ccmtypes";
import InfoBanner from "../components/infoBanner";
import { InfoBannerTypeEnum } from "../components/infoBanner/InfoBanner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/InfoBanner",
  component: InfoBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    theme: {},
  },
} satisfies Meta<typeof InfoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  args: {
    title: "Info concernant la création d'une réclamation",
    description: "Description concernant la création d'une réclamation",
    theme,
    infoBannerType: InfoBannerTypeEnum.Info,
  },
};

export const Success: Story = {
  args: {
    title: "Info concernant la création d'une réclamation",
    description: "Description concernant la création d'une réclamation",
    theme,
    infoBannerType: InfoBannerTypeEnum.Success,
  },
};

export const Error: Story = {
  args: {
    title: "Info concernant la création d'une réclamation",
    description: "Description concernant la création d'une réclamation",
    theme,
    infoBannerType: InfoBannerTypeEnum.Error,
  },
};

export const Warning: Story = {
  args: {
    title: "Info concernant la création d'une réclamation",
    description: "Description concernant la création d'une réclamation",
    theme,
    infoBannerType: InfoBannerTypeEnum.Warning,
  },
};
