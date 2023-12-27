import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  tableContainer: {
    backgroundColor: theme.backgroundSection,
    color: theme.textMajor,
    width: "100%",
    border: "1px solid " + theme.textMinor,
    fontFamily: "Open Sans Regular",
    borderCollapse: "collapse",
  },
  tableHeader: {
    position: "sticky",
    top: -0.5,
    backgroundColor: theme.backgroundSectionMajor,
    boxShadow: "1px 1px 10px 1px " + theme.backgroundSurface,
  },
  tableHeaderRow: {
    height: 48,
  },
  tableHeaderColumn: {
    height: "100%",
    fontSize: 13,
  },
  tableHeaderColumnTitle: {
    borderRight: "2px solid " + theme.textMinor,
    width: "calc(100% - 18px)",
    textAlign: "start",
    display: "block",
    paddingLeft: 18,
  },
  tableHeaderLastColumnTitle: {
    extend: "tableHeaderColumnTitle",
    borderRight: "none",
  },

  tableBody: {
    overflow: "auto",
    marginTop: 30,
  },
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
  tableColumn: {
    textAlign: "start",
    paddingLeft: 18,
    fontSize: 14,
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
