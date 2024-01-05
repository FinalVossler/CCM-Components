import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  textareaContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.backgroundSurface,
    padding: 12,
    flex: 1,
    position: "relative",
    borderRadius: 5,
    fontFamily: "Open Sans Regular",
    boxSizing: "border-box",
  },
  label: {
    marginBottom: 4,
    color: theme.textMajor,
    fontSize: 16,
    fontFamily: "Open Sans Regular",
    fontWeight: 600,
    fontStyle: "normal",
  },
  textarea: {
    backgroundColor: theme.backgroundSurface,
    color: theme.textMajor,
    width: "100%",
    boxSizing: "border-box",
    maxWidh: "100%",
  },
}));

export default useStyles;
