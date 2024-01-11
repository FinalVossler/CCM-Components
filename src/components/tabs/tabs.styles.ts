import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  tabsContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.backgroundSection,
    color: theme.textMajor,
    position: "relative",
    overflow: "auto",
    borderBottom: "1px solid " + theme.borderDefault,
    fontFamily: "Open Sans Regular",
    minHeight: 59.56,
    boxSizing: "border-box",
  },
  tabOption: {
    marginRight: 10,
    marginLeft: 10,

    fontSize: 16,
    fontWeight: 600,
    padding: 18,
    paddingTop: 20,
    paddingBottom: 20,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    cursor: "pointer",
    color: theme.textMajor,
    "&:hover": {
      color: theme.textSuccess,
      backgroundColor: theme.backgroundSectionMajor,
    },
    transition: "all .15s ease-in-out",
  },
  activeOption: {
    color: theme.textSuccessStrong,
  },
  underline: {
    borderBottom: "3px solid " + theme.textSuccessStrong,
    position: "absolute",
    transition: "all .15s ease-in-out",
    bottom: 1,
  },
}));

export default useStyles;
