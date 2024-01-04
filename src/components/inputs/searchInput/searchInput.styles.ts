import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  searchInputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.backgroundGrey,
    flex: 1,
    position: "relative",
    borderRadius: 10,
    fontFamily: "Open Sans Regular",
    minWidth: 300,

    "& svg": {
      color: theme.textPrimary,
      cursor: "pointer",
      zIndex: 1,
      top: 8,
      left: 10,
      width: 16,
      height: 16,
    },
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    top: 5,

    "& path": {
      fill: theme.textMajor,
    },
  },
  searchOptionsContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.textReverse,
    padding: 10,
    backgroundColor: theme.textMajor,
    width: "100%",
    borderRadius: 8,
    boxSizing: "border-box",
  },
  singleSearchOption: {
    display: "flex",
    alignItems: "center",
    margin: "3px 5px",
  },
  searchOptionCheckbox: {
    cursor: "pointer",

    border: "2px solid " + theme.textMinor,
    backgroundColor: theme.backgroundSurface,
    height: 16,
    width: 16,
    top: 2,
    borderRadius: 2,
    position: "relative",
    accentColor: theme.textMinor,
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    "-o-appearance": "none",

    "&:checked": {
      borderRadius: 8,

      backgroundColor: theme.textSuccess,

      "-moz-appearance": "checkbox",
      "-webkit-appearance": "checkbox",
      "-o-appearance": "checkbox",
    },
  },
}));

export default useStyles;
