import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  ccmIcon: {
    fontFamily: "Open Sans Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 700,
    color: theme.textMajor,
    marginRight: 25,
  },
}));

export default useStyles;
