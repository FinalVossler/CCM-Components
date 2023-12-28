import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  status: {
    padding: "6px 16px",
    fontFamily: "Open Sans Bold",
    cursor: "pointer",
    borderRadius: 20,
    borderWidth: 1.5,
    borderStyle: "solid",
    whiteSpace: "nowrap",
  },
  statusWarning: {
    extend: "status",
    color: theme.textWarningStrong,
    backgroundColor: theme.backgroundSurface,
    borderColor: theme.borderWarning,
  },
  statusDanger: {
    extend: "status",
    borderColor: theme.borderDanger,
    color: theme.textDangerStrong,
    backgroundColor: theme.backgroundSurface,
  },
  statusSuccess: {
    extend: "status",
    borderColor: theme.borderSuccess,
    color: theme.textSuccessStrong,
    backgroundColor: theme.backgroundSurface,
  },
  statusInfo: {
    extend: "status",
    borderColor: theme.borderInfo,
    backgroundColor: theme.backgroundSurface,
    color: theme.textInfoStrong,
  },
}));

export default useStyles;
