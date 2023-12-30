import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  title: {
    fontSize: 32,
    marginBottom: 8,
    marginTop: 8,
    fontWeight: 400,
    fontFamily: "Open Sans SemiBold",
    color: theme.textMajor,
  },
}));

export default useStyles;
