import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Section from "../components/section";
import ProfilePicture from "../components/ProfilePicture";
import { InfoSectionExample } from "./InfoSection.stories";
import Aside from "../components/aside";
import DatePicker from "../components/inputs/datePicker/index";
import Selector from "../components/inputs/selector/index";
import Input from "../components/inputs/input";
import YesOrNo from "../components/inputs/yesOrNo/index";

const AsideExample = () => {
  return (
    <Aside>
      <Section title="Demande" theme={theme}>
        <ProfilePicture
          firstName="Hamza"
          lastName="Khalifa"
          withFullFirstNameAndLast
          action={{ actionTitle: "Suivre le dossier", onClick: () => {} }}
        />
        <br />
        <InfoSectionExample />

        <DatePicker placeholder="Date de fin cible" />
        <br />

        <Selector
          theme={theme}
          placeholder="Titre"
          options={[
            {
              value: "option1",
              label: "Option 1",
            },
            {
              value: "option2",
              label: "Option 2",
            },
            {
              value: "option3",
              label: "Option 3",
            },
          ]}
        />
        <br />
        <Selector
          theme={theme}
          placeholder="Titre"
          isMulti
          options={[
            {
              value: "option1",
              label: "Option 1",
            },
            {
              value: "option2",
              label: "Option 2",
            },
            {
              value: "option3",
              label: "Option 3",
            },
          ]}
        />
      </Section>

      <Section title="Details" theme={theme}>
        <Input
          theme={theme}
          placeholder="Titre"
          label="Titre"
          maxCharacters={40}
        />
        <br />
        <Input placeholder="Propriétaire" label="Propriétaire" theme={theme} />
        <br />

        <DatePicker placeholder="Date de fin cible" label="Date de fin cible" />

        <br />

        <Input placeholder="Sélectionner" label="Sélectionner" theme={theme} />
        <br />

        <Input
          placeholder="Date d'envoi/réception"
          label="Date d'envoi/réception"
          theme={theme}
        />

        <br />

        <Input placeholder="Source" label="Source" theme={theme} />
      </Section>
    </Aside>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/AsideExample",
  component: AsideExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof AsideExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
