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
      top: 13,
      left: 20,
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
}));

export default useStyles;
