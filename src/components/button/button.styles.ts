import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  confirmButton: {
    padding: 12,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Open Sans SemiBold",
    boxSizing: "border-box",
    borderRadius: 4,
    cursor: "pointer",
    color: theme.textPrimary,
    backgroundColor: theme.textReverse,
    border: "2px solid " + theme.borderSuccess,

    "&:hover": {
      backgroundColor: theme.backgroundPrimary,
      border: "2px solid " + theme.backgroundPrimary,
      color: theme.textReverse,

      "& svg": {},
    },
  },
  cancelButton: {
    extend: "confirmButton",
    backgroundColor: theme.textReverse,
    color: theme.textDanger,
    border: "2px solid " + theme.textDanger,
    "&:hover": {
      color: theme.textReverse,
      backgroundColor: theme.textDanger,
      borderColor: theme.backgroundDanger,
    },
  },
}));

export default useStyles;
