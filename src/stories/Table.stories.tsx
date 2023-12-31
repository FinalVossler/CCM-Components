import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Table from "../components/table";
import { theme } from "ccmtypes";
import { ITableColumn, TableFilterTypeEnum } from "../components/table/Table";
import Status from "../components/status";
import { StatusTypeEnum } from "../components/status/Status";
import SearchIcon from "../components/icons/SearchIcon";
import MoreButtons from "../components/moreButtons";
import CrossIcon from "../components/icons/CrossIcon";
import ClearIcon from "../components/icons/ClearIcon";
import PlusIcon from "../components/icons/PlusIcon";
import { MoreButtonsDotsTypeEnum } from "../components/moreButtons/MoreButtons";
import { ButtonTypeEnum } from "../components/button/Button";

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
            minWidth: "100px",
            suffixIcon: (props) => (
              <SearchIcon
                {...props}
                color={theme.textMinor}
                style={{ position: "relative", top: -1.4 }}
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

export const WithOptionsAsLastColumn: Story = {
  args: {
    selectableElements: true,
    columns: columns
      .map((c) => {
        const withSearch: boolean = Math.random() >= 0.5;
        if (withSearch) {
          return {
            ...c,
            handleSearch: () => {},
            searchInputProps: {
              placeholder: "Rechercher",
              minWidth: "100px",
              suffixIcon: (props) => (
                <SearchIcon
                  {...props}
                  color={theme.textMinor}
                  style={{ position: "relative", top: -1.4 }}
                />
              ),
            },
          };
        }
        return c;
      })
      .concat([
        {
          name: "",
          title: "",
          render: (props) => {
            return (
              <MoreButtons
                type={MoreButtonsDotsTypeEnum.Vertical}
                buttons={[
                  {
                    icon: (props) => <CrossIcon {...props} />,
                    text: "Delete",
                  },
                  {
                    icon: (props) => <ClearIcon {...props} />,
                    text: "Clear",
                  },
                  {
                    icon: (props) => <PlusIcon {...props} />,
                    text: "Params",
                  },
                ]}
              />
            );
          },
        },
      ]),
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

export const ContainedTable: Story = {
  args: {
    containedProps: {
      title: "Activités",
      isContained: true,
    },
    selectableElements: true,
    columns: columns
      .map((c) => {
        const withSearch: boolean = Math.random() >= 0.5;
        if (withSearch) {
          return {
            ...c,
            handleSearch: () => {},
            searchInputProps: {
              placeholder: "Rechercher",
              minWidth: "100px",
              suffixIcon: (props) => (
                <SearchIcon
                  {...props}
                  color={theme.textMinor}
                  style={{ position: "relative", top: -1.4 }}
                />
              ),
            },
          };
        }
        return c;
      })
      .concat([
        {
          name: "",
          title: "",
          render: (props) => {
            return (
              <MoreButtons
                type={MoreButtonsDotsTypeEnum.Vertical}
                buttons={[
                  {
                    icon: (props) => <CrossIcon {...props} />,
                    text: "Delete",
                  },
                  {
                    icon: (props) => <ClearIcon {...props} />,
                    text: "Clear",
                  },
                  {
                    icon: (props) => <PlusIcon {...props} />,
                    text: "Params",
                  },
                ]}
              />
            );
          },
        },
      ]),
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

export const WithMainSearch: Story = {
  args: {
    containedProps: {
      title: "Activités",
      isContained: true,
      searchInputProps: {
        options: [],
        placeholder: "Rechercher une activité",
      },
      buttonProps: [
        {
          label: "Nouvelle Activité",
          buttonType: ButtonTypeEnum.Confirm,
          withoutBorder: true,
          prefixIcon: (props) => <PlusIcon {...props} />,
        },
      ],
    },
    selectableElements: true,
    columns: columns
      .map((c) => {
        const withSearch: boolean = Math.random() >= 0.5;
        if (withSearch) {
          return {
            ...c,
            handleSearch: () => {},
            searchInputProps: {
              placeholder: "Rechercher",
              minWidth: "100px",
              suffixIcon: (props) => (
                <SearchIcon
                  {...props}
                  color={theme.textMinor}
                  style={{ position: "relative", top: -1.4 }}
                />
              ),
            },
          };
        }
        return c;
      })
      .concat([
        {
          name: "",
          title: "",
          render: (props) => {
            return (
              <MoreButtons
                type={MoreButtonsDotsTypeEnum.Vertical}
                buttons={[
                  {
                    icon: (props) => <CrossIcon {...props} />,
                    text: "Delete",
                  },
                  {
                    icon: (props) => <ClearIcon {...props} />,
                    text: "Clear",
                  },
                  {
                    icon: (props) => <PlusIcon {...props} />,
                    text: "Params",
                  },
                ]}
              />
            );
          },
        },
      ]),
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

export const WithSearchAndFilters: Story = {
  args: {
    containedProps: {
      title: "Demandes",
      isContained: true,
      searchInputProps: {
        options: [],
        placeholder: "Rechercher une demande",
      },
      buttonProps: [
        {
          label: "Nouvelle demande",
          buttonType: ButtonTypeEnum.Confirm,
          withoutBorder: true,
          prefixIcon: (props) => <PlusIcon {...props} />,
        },
      ],
      filtersText: "Filtrer par:",
      filtersInputsProps: [
        {
          filterType: TableFilterTypeEnum.DatePicker,
          datePickerInputProps: {
            placeholder: "Date de début",
            maxWidth: "200px",
            minWidth: "50px",
          },
        },
        {
          filterType: TableFilterTypeEnum.Selector,
          selectorInputProps: {
            placeholder: "Status",
            maxWidth: "130px",
            minWidth: "50px",
            options: [
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3 " },
            ],
          },
        },
        {
          filterType: TableFilterTypeEnum.Selector,
          selectorInputProps: {
            placeholder: "Types",
            maxWidth: "130px",
            minWidth: "50px",
            options: [
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3 " },
            ],
          },
        },
        {
          filterType: TableFilterTypeEnum.Selector,
          selectorInputProps: {
            placeholder: "Catégories",
            maxWidth: "140px",
            minWidth: "50px",
            options: [
              { value: "option1", label: "Long wounded category 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3 " },
            ],
          },
        },
        {
          filterType: TableFilterTypeEnum.Selector,
          selectorInputProps: {
            placeholder: "Clients",
            maxWidth: "130px",
            minWidth: "50px",
            options: [
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3 " },
            ],
          },
        },

        {
          filterType: TableFilterTypeEnum.Selector,
          selectorInputProps: {
            placeholder: "Mes demandes",
            maxWidth: "200px",
            minWidth: "50px",
            options: [
              { value: "option1", label: "CCM2323332" },
              { value: "option2", label: "CCM2323332" },
              { value: "option3", label: "CCM2323332 " },
            ],
          },
        },
      ],
    },
    selectableElements: true,
    columns: columns
      .map((c) => {
        const withSearch: boolean = Math.random() >= 0.5;
        if (withSearch) {
          return {
            ...c,
            handleSearch: () => {},
            searchInputProps: {
              placeholder: "Rechercher",
              minWidth: "100px",
              suffixIcon: (props) => (
                <SearchIcon
                  {...props}
                  color={theme.textMinor}
                  style={{ position: "relative", top: -1.4 }}
                />
              ),
            },
          };
        }
        return c;
      })
      .concat([
        {
          name: "",
          title: "",
          render: (props) => {
            return (
              <MoreButtons
                type={MoreButtonsDotsTypeEnum.Vertical}
                buttons={[
                  {
                    icon: (props) => <CrossIcon {...props} />,
                    text: "Delete",
                  },
                  {
                    icon: (props) => <ClearIcon {...props} />,
                    text: "Clear",
                  },
                  {
                    icon: (props) => <PlusIcon {...props} />,
                    text: "Params",
                  },
                ]}
              />
            );
          },
        },
      ]),
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
