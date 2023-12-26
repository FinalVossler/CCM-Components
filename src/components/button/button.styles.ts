import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  confirmButton: {
    backgroundColor: theme.backgroundPrimary,
    padding: 12,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Open Sans SemiBold",
    color: theme.textReverse,
    boxSizing: "border-box",
    borderRadius: 4,
    cursor: "pointer",
    border: "2px solid " + theme.backgroundPrimary,

    "&:hover": {
      color: theme.textPrimary,
      backgroundColor: theme.textReverse,
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
    },
  },
}));

export default useStyles;
