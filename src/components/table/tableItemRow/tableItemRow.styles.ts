import { ITheme } from "ccmtypes";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  tableRow: {
    height: 48,
    borderBottom: "1px solid " + theme.textMajor,

    "& .column_resizer_own_class": {
      borderRight: "1px solid transparent",
      width: 10,
      padding: 0,
      margin: 0,
    },

    "& .column_resizer_own_class:last-child": {
      border: "none",
    },
  },
  tableLastRow: {
    extend: "tableRow",
    borderBottom: "none",
  },
  tableSelectedRow: {
    extend: "tableRow",
    backgroundColor: theme.textMajor,
    color: theme.textMinor,

    "& .column_resizer_own_class": {
      borderRight: "1px solid transparent",
    },
  },
  checkbox: {
    border: "2px solid " + theme.textMinor,
    backgroundColor: theme.backgroundSurface,
    cursor: "pointer",
    height: 16,
    width: 16,
    top: 2,
    position: "relative",
    accentColor: theme.textMinor,
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    "-o-appearance": "none",

    "&:checked": {
      backgroundColor: theme.textSuccess,

      "-moz-appearance": "checkbox",
      "-webkit-appearance": "checkbox",
      "-o-appearance": "checkbox",
    },
  },
}));

export default useStyles;
