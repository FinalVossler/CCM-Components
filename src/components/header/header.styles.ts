import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundSection,
    height: 64,
    padding: "0px 16px",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
