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

  errorerTextareaContainer: {
    "& textarea": {
      borderColor: theme.textDanger,
      color: theme.textDanger,

      borderWidth: 2,
      "&:focus": {
        borderWidth: 2,
        borderColor: theme.textDanger,
      },
    },
    "& $label": {
      color: theme.textDanger,
    },
    "& path": {
      fill: theme.textDanger + "!important",
    },
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

  error: {
    color: theme.textDanger,
    fontSize: 16,
    paddingLeft: 3,
    position: "absolute",
    right: 12,
    top: 12,
  },
  errorWhenNoLabel: {
    extend: "error",
    top: 5,
  },
}));

export default useStyles;
