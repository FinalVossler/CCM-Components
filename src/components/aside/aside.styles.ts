import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  asideContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: theme.backgroundSection,
    width: 515,
    alignItems: "center",
    boxSizing: "border-box",
    height: "fit-content",
  },
}));

export default useStyles;
