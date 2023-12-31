import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  profilePictureContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.textMajor,
  },
  picture: {
    borderRadius: "50%",
    width: 48,
    height: 48,
    backgroundColor: theme.backgroundSection,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid " + theme.borderDefault,
    boxSizing: "border-box",
  },
  content: {
    marginLeft: 14,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    fontSize: 14,
  },
  firstAndLastName: {},
  action: {
    textDecoration: "underline",
    color: theme.textSuccessStrong,
    cursor: "pointer",
  },
}));

export default useStyles;
