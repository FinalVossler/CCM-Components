import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Table from "../components/table";
import { theme } from "ccmtypes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    height: {
      type: "number",
    },
    selectableElements: {
      type: "boolean",
    },
    theme: {},
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    id: "1",
    title: "Andreas",
    internalReference: "France",
    language: "fr",
    game: "Chess",
    status: "Ok",
    openSince: "12/10/2023",
    collaborator: "5",
  },
  {
    id: "2",
    title: "Andreas",
    internalReference: "France",
    language: "fr",
    game: "Chess",
    status: "Ok",
    openSince: "12/10/2023",
    collaborator: "5",
  },
  {
    id: "3",
    title: "Andreas",
    internalReference: "France",
    language: "fr",
    game: "Chess",
    status: "Ok",
    openSince: "12/10/2023",
    collaborator: "5",
  },
];
const columns = [
  {
    name: "title",
    title: "Titre",
  },
  {
    title: "Référence interne",
    name: "internalReference",
  },
  {
    title: "Langue",
    name: "language",
  },
  {
    title: "Game",
    name: "game",
  },
  {
    title: "Statut",
    name: "status",
  },
  {
    title: "Ouverte depuis",
    name: "openSince",
  },
  {
    title: "Collaborateur",
    name: "collaborator",
  },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithCheckboxes: Story = {
  args: {
    selectableElements: true,
    columns,
    data,
    theme,
  },
};

export const WithoutCheckboxes: Story = {
  args: {
    selectableElements: false,
    columns,
    data,
    theme,
  },
};

export const Big: Story = {
  args: {
    selectableElements: false,
    columns,
    data: Array.from({ length: 30 })
      .map((_, i) => i)
      .reduce((acc: any[], _) => acc.concat(data), data),
    theme,
  },
};

export const BigWithDefinedHeight: Story = {
  args: {
    selectableElements: false,
    columns,
    height: 350,
    data: Array.from({ length: 30 })
      .map((_, i) => i)
      .reduce((acc: any[], _) => acc.concat(data), data),
    theme,
  },
};
