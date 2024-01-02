import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "ccmtypes";
import SideBar from "../components/sideBar";
import SearchIcon from "../components/icons/SearchIcon";
import MessageIcon from "../components/icons/MessageIcon";
import SwiftIcon from "../components/icons/SwiftIcon";
import RequestIcon from "../components/icons/RequestIcon";
import DashboardIcon from "../components/icons/DashboardIcon";
import ContactsIcon from "../components/icons/ContactsIcon";
import FolderIcon from "../components/icons/FolderIcon";
import StatsIcon from "../components/icons/StatsIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import ParametersIcon from "../components/icons/ParametersIcon";
import CreateContactIcon from "../components/icons/CreateContactIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SideBar",
  component: SideBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {},
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SideBarBasic: Story = {
  args: {
    theme,
    // sideBarSections: [],
    sideBarSections: [
      {
        title: "",

        options: [
          {
            icon: () => <SearchIcon style={{ position: "relative" }} />,
            title: "Recherche avancée",
          },
          {
            icon: () => <MessageIcon style={{ position: "relative" }} />,
            title: "Envoyer un mail",
          },
          {
            icon: () => <SwiftIcon style={{ position: "relative" }} />,
            title: "Envoyer un swift",
          },
          {
            icon: () => <RequestIcon style={{ position: "relative" }} />,
            title: "Nouvelle demande",
          },
          {
            icon: () => <RequestIcon style={{ position: "relative" }} />,
            title: "Créer une réclamation",
          },
          {
            icon: () => <CreateContactIcon style={{ position: "relative" }} />,
            title: "Créer un contact",
          },
        ],
      },
      {
        title: "Menu principale",
        options: [
          {
            icon: () => <DashboardIcon style={{ left: 10 }} />,
            title: "Tableau de bord",
          },
          {
            icon: () => <ContactsIcon style={{ left: 10 }} />,
            title: "Contacts",
          },
          {
            icon: () => <FolderIcon style={{ left: 10 }} />,
            title: "Mes dossiers",
          },
          {
            icon: () => <StatsIcon style={{ left: 10 }} />,
            title: "Statistiques",
          },
        ],
      },
      {
        title: "Autre",
        options: [
          {
            icon: () => <ProfileIcon style={{ left: 10 }} />,
            title: "Profil",
          },
          {
            icon: () => <ParametersIcon style={{ left: 10 }} />,
            title: "Paramètres",
          },
        ],
      },
    ],
  },
};
