import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/input";
import { theme } from "ccmtypes";
import YesOrNo from "../components/yesOrNo";
import FormSectionComponent from "../components/formSection";
import DatePicker from "../components/datePicker";
import Selector from "../components/selector";

const FormSection = () => {
  return (
    <div
      style={{
        backgroundColor: theme.backgroundSurface,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <FormSectionComponent title="Réclamation">
        <Input
          label="Titre de la réclamation"
          theme={theme}
          placeholder="Titre"
          fullWidth
        />
        <Input
          label="Origine de la réclamation"
          placeholder="Sélectionner"
          theme={theme}
        />
        <Input label="Clients" placeholder="Sélectionner" theme={theme} />
        <YesOrNo label="En attente de retour" />
        <YesOrNo label="Demande justifiée" />
      </FormSectionComponent>

      <FormSectionComponent>
        <DatePicker
          label="Date d'envoi/réception"
          placeholder="Date de fin cible"
        />

        <Selector
          label="Boite générique"
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

        <Selector
          label="Unité"
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
      </FormSectionComponent>

      <FormSectionComponent>
        <Input
          label="Origine de la réclamation"
          placeholder="Sélectionner"
          theme={theme}
        />
        <Input label="Clients" placeholder="Sélectionner" theme={theme} />
        <YesOrNo label="En attente de retour" />
        <YesOrNo label="En attente de retour" />
        <YesOrNo label="Demande justifiée" />
      </FormSectionComponent>

      <FormSectionComponent>
        <YesOrNo label="A/R client" />
        <DatePicker label="Date de fin cible" placeholder="Date de fin cible" />
        <YesOrNo label="Impact de conformité" />

        <Input
          label="Origine de la réclamation"
          placeholder="Sélectionner"
          theme={theme}
        />
      </FormSectionComponent>
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/FormSection",
  component: FormSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FormSectionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Form: Story = {
  args: {},
};
