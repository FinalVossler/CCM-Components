import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  defaultButton: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    padding: 12,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Open Sans SemiBold",
    boxSizing: "border-box",
    borderRadius: 4,
    cursor: "pointer",
    color: theme.textMajor,
    backgroundColor: theme.textReverse,
    border: "2px solid " + theme.textMajor,

    "&:hover": {
      backgroundColor: theme.textMajor,
      border: "2px solid " + theme.textReverse,
      color: theme.textReverse,
    },

    "& path": {
      fill: theme.textMajor,
    },
  },
  confirmButton: {
    extend: "defaultButton",
    color: theme.textPrimary,
    backgroundColor: theme.textReverse,
    border: "2px solid " + theme.borderSuccess,

    "&:hover": {
      backgroundColor: theme.backgroundPrimary,
      border: "2px solid " + theme.backgroundPrimary,
      color: theme.textReverse,

      "& path": {
        fill: theme.textReverse,
      },
    },

    "& path": {
      fill: theme.textPrimary,
    },
  },
  cancelButton: {
    extend: "defaultButton",
    backgroundColor: theme.textReverse,
    color: theme.textDanger,
    border: "2px solid " + theme.textDanger,
    "&:hover": {
      color: theme.textReverse,
      backgroundColor: theme.textDanger,
      borderColor: theme.backgroundDanger,
    },
    "& path": {
      fill: theme.textDanger,
    },
  },

  withoutBorder: {
    border: "none",
    background: "transparent",
    padding: 5,
    fontWeight: 600,
    transition: "all .2s ease-in-out",

    "&:hover": {
      backgroundColor: "initial",
      border: "none",
      color: theme.textMajor,
      transform: "rotate(4deg)",

      "& path": {
        fill: theme.textMajor,
      },
    },

    "&$confirmButton": {
      "&:hover": {
        color: theme.textPrimary,

        "& path": {
          fill: theme.textPrimary,
        },
      },
    },
    "&$cancelButton": {
      "&:hover": {
        color: theme.textDanger,

        "& path": {
          fill: theme.textDanger,
        },
      },
    },
  },
}));

export default useStyles;
