import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  containedTableContainer: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 8,
    border: "1px solid " + theme.borderDefaultMinor,
    backgroundColor: theme.backgroundSurface,
  },
  tableContainer: {
    backgroundColor: theme.backgroundSection,
    color: theme.textMajor,
    width: "100%",
    fontFamily: "Open Sans Regular",
    borderCollapse: "collapse",

    "& .columnResizer": {
      minWidth: 15,
    },
  },
  tableHeader: {
    position: "sticky",
    top: -0.5,
    backgroundColor: theme.backgroundSectionStrong,
    boxShadow: "0px 0px 1px 0px " + theme.textMajor,
    zIndex: 1,
  },
  tableHeaderRow: {
    height: 48,
  },
  tableHeaderColumn: {
    height: "100%",
    fontSize: 13,
    whiteSpace: "nowrap",
    position: "relative",
  },
  tableHeaderColumnOptions: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.backgroundSurface,
    width: 100,
    color: theme.textMajor,
    position: "absolute",
    left: 18,
    top: 40,
    boxShadow: "1px 1px 10px 1px black",
  },
  singleOption: {
    with: "100%",
    cursor: "pointer",
    backgroundColor: theme.textMajor,
    color: theme.textReverse,
    border: "1px solid " + theme.textReverse,
  },
  tableHeaderColumnTitle: {
    borderRight: "2px solid " + theme.textMinor,
    width: "calc(100% - 18px)",
    textAlign: "start",
    display: "block",
    paddingLeft: 18,
    marginRight: 18,
    cursor: "pointer",
  },
  tableHeaderLastColumnTitle: {
    extend: "tableHeaderColumnTitle",
    borderRight: "none",
  },

  tableBody: {
    overflow: "auto",
    marginTop: 30,
  },
  tableSearchRow: {
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
  tableColumn: {
    textAlign: "start",
    paddingLeft: 18,
    fontSize: 14,
  },

  tableSearchColumn: {
    extend: "tableColumn",
    paddingLeft: 0,
  },

  hiddenColumnsContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  hiddenColumn: {
    padding: 10,
    backgroundColor: theme.backgroundSurface,
    color: theme.textMajor,
    border: "1px solid " + theme.borderDefaultMinor,
    borderRadius: 8,
    cursor: "pointer",
    marginRight: 10,
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
