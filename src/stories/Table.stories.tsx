import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Table from "../components/table";
import { theme } from "ccmtypes";
import { ITableColumn } from "../components/table/Table";
import Status from "../components/status";
import { StatusTypeEnum } from "../components/status/Status";
import SearchIcon from "../components/icons/SearchIcon";

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

interface IData {
  id: string;
  title: string;
  internalReference: string;
  language: string;
  game: string;
  status: string;
  openSince: string;
  collaborator: string;
}

const getRandomStatus = () => {
  const statuses = ["Error", "Warning", "In Progress", "Validated"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const data: IData[] = [
  {
    id: "1",
    title: "Andreas",
    internalReference: "France",
    language: "fr",
    game: "Chess",
    status: "Validated",
    openSince: "12/10/2023",
    collaborator: "5",
  },
  {
    id: "2",
    title: "Andreas",
    internalReference: "France",
    language: "fr",
    game: "Chess",
    status: getRandomStatus(),
    openSince: "12/10/2023",
    collaborator: "5",
  },
  {
    id: "3",
    title: "Andreas",
    internalReference: "France",
    language: "fr",
    game: "Chess",
    status: getRandomStatus(),
    openSince: "12/10/2023",
    collaborator: "5",
  },
  {
    id: "4",
    title: "Andreas",
    internalReference: "France",
    language: "fr",
    game: "Chess",
    status: getRandomStatus(),
    openSince: "12/10/2023",
    collaborator: "5",
  },
];
const columns: ITableColumn<IData>[] = [
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
    render: (props) => {
      return (
        <Status
          statusType={StatusTypeEnum.Info}
          label={props.element.game}
        ></Status>
      );
    },
  },
  {
    title: "Statut",
    name: "status",
    render: (props) => {
      return (
        <Status
          statusType={
            props.element.status === "Validated"
              ? StatusTypeEnum.Success
              : props.element.status === "Error"
              ? StatusTypeEnum.Danger
              : props.element.status === StatusTypeEnum.Warning
              ? StatusTypeEnum.Warning
              : StatusTypeEnum.Info
          }
          label={props.element.status}
        ></Status>
      );
    },
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
      .reduce(
        (acc: any[], _) =>
          acc.concat(data.map((el, i) => ({ ...el, id: acc.length + i }))),
        data
      ),
    theme,
  },
};

export const BigWithDefinedHeight: Story = {
  args: {
    selectableElements: true,
    columns,
    height: 350,
    data: Array.from({ length: 30 })
      .map((_, i) => i)
      .reduce(
        (acc: any[], _) =>
          acc.concat(data.map((el, i) => ({ ...el, id: acc.length + i }))),
        data
      ),
    theme,
  },
};

export const WithSearchForSomeColumns: Story = {
  args: {
    selectableElements: true,
    columns: columns.map((c) => {
      const withSearch: boolean = Math.random() >= 0.5;
      if (withSearch) {
        return {
          ...c,
          handleSearch: () => {},
          searchInputProps: {
            placeholder: "Rechercher",
            minWidth: 100,
            suffixIcon: (props) => (
              <SearchIcon
                {...props}
                color={theme.textMinor}
                style={{ position: "relative", top: -2 }}
              />
            ),
          },
        };
      }
      return c;
    }),
    height: 350,
    data: Array.from({ length: 30 })
      .map((_, i) => i)
      .reduce(
        (acc: any[], _) =>
          acc.concat(data.map((el, i) => ({ ...el, id: acc.length + i }))),
        data
      ),
    theme,
  },
};
