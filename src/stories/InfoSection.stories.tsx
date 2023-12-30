import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Info from "../components/info";
import InfoSection from "../components/infoSection";

const InfoSectionExample = () => {
  return (
    <InfoSection>
      <Info title="Référence du dossier" value="CCM24545"></Info>
      <Info title="Type de la demande" value="Réclamation"></Info>
      <Info title="Boite mail générique" value="hk.kh.pro@gmail.com"></Info>
      <Info title="Unité" value="FCS - Head Client Service - France"></Info>
    </InfoSection>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/InfoSectionExample",
  component: InfoSectionExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof InfoSectionExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    theme,
  },
};
