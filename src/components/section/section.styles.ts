import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  sectionContainer: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: theme.backgroundSectionMajor,
    padding: 16,
    flexDirection: "column",
    width: 387,
    boxSizing: "border-box",
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    margin: 0,
    fontWeight: 400,
    fontFamily: "Open Sans SemiBold",
    color: theme.textMajor,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 30,
  },
  sectionContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: 24,
    "& >div": {
      width: "100%",
    },
  },
}));

export default useStyles;
