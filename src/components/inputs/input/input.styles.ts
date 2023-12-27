import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.backgroundSurface,
    padding: 12,
    flex: 1,
    position: "relative",
    borderRadius: 5,
  },
  fullWidthContainer: {
    extend: "inputContainer",
    width: "100%",
    flex: "initial",
  },
  label: {
    marginBottom: 4,
    color: theme.textMajor,
    fontSize: 16,
    fontFamily: "Open Sans Regular",
    fontWeight: 600,
    fontStyle: "normal",
  },
  input: {
    backgroundColor: theme.backgroundSurface,
    color: theme.textMajor,
    width: "100%",
    height: 32,
    borderWidth: 1,
    boxSizing: "border-box",
    border: "1px solid " + theme.borderDefaultMinor,
    borderRadius: 4,
    paddingLeft: 8,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    "&:focus": {
      outline: "none",
      border: "1px solid " + theme.borderDefault,
    },
  },
  maxCharacters: {
    color: theme.textMajor,
    marginRight: 5,
    marginLeft: 5,
  },
  suffixIcon: {
    color: theme.textMajor,
    marginRight: 5,
    marginLeft: 5,
  },
  iconsContainer: {
    position: "absolute",
    right: 15,
    top: 44,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsContainerWithoutLabel: {
    extend: "iconsContainer",
    top: 6,
    right: 5,
  },
}));

export default useStyles;
