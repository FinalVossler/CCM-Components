import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  formSectionContainer: {
    backgroundColor: theme.backgroundSurface,
    display: "flex",
    flexDirection: "column",
    border: "1px solid " + theme.borderDefaultMinor,
    boxSizing: "border-box",
    padding: 12,
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 24,
    fontStyle: "normal",
    fontFamily: "Open Sans Regular",
    color: theme.textMajor,
    padding: 12,
    margin: 0,
  },
}));

export default useStyles;
