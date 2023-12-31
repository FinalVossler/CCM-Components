import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  selectorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.backgroundSurface,
    padding: 12,
    flex: 1,
    position: "relative",
    borderRadius: 5,
    fontFamily: "Open Sans Regular",

    "& svg": {
      color: theme.textPrimary,
      cursor: "pointer",
    },
  },
  erroredSelectorContainer: {
    "& div": {
      borderColor: theme.textDanger,

      borderWidth: 2,
      "&:focus": {
        borderWidth: 2,
        borderColor: theme.textDanger,
      },
    },
    "& .css-1u9des2-indicatorSeparator": {
      backgroundColor: theme.textDanger,
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
    top: 4,
    right: 46,
  },
  errorWhenNoLabelButMultiAndSomethingSelected: {
    extend: "errorWhenNoLabel",
    right: 76,
  },
}));

export default useStyles;
