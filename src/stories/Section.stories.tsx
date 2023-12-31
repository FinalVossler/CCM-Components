import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Section from "../components/section";
import ProfilePicture from "../components/ProfilePicture";
import { InfoSectionExample } from "./InfoSection.stories";

const SectionExample = () => {
  return (
    <Section title="Demande" theme={theme}>
      <ProfilePicture
        firstName="Hamza"
        lastName="Khalifa"
        withFullFirstNameAndLast
        action={{ actionTitle: "Suivre le dossier", onClick: () => {} }}
      />
      <br />
      <InfoSectionExample />
    </Section>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SectionExample",
  component: SectionExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof SectionExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
