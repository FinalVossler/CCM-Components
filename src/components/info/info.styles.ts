import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  infoContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.textMajor,
    fontSize: 12,
    fontFamily: "Open Sans Regular",
    marginTop: 6,
    marginBottom: 6,
  },
  infoTitle: {
    marginRight: 10,
  },
  infoValue: {
    marginRight: 10,
  },
}));

export default useStyles;
