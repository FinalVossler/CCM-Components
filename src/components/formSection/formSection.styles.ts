import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  formSectionContainer: {
    backgroundColor: theme.backgroundSurface,
    margin: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    border: "1px solid " + theme.borderDefaultMinor,
    boxSizing: "border-box",
    padding: 12,
  },
}));

export default useStyles;
