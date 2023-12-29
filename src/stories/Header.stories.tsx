import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import Header from "../components/header";
import CCMIcon from "../components/ccmIcon";
import SearchInput from "../components/inputs/searchInput";
import SelectedAddresses from "../components/selectedAddresses";
import NotificationIcon from "../components/icons/NotificationIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    theme,
    right: () => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CCMIcon />
          <SearchInput options={[]} placeholder="Rechercher" />
        </div>
      );
    },
    left: () => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <SelectedAddresses
            title="Sélection boites mail"
            numberOfSelectedAddressesTitle="2 sélectionnées"
          />
          <NotificationIcon style={{ marginLeft: 15, cursor: "pointer" }} />
        </div>
      );
    },
  },
};
