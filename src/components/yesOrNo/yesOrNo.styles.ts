import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  yesOrNoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.backgroundSurface,
    padding: 12,
    minWidth: 170,
    flex: 1,
  },
  label: {
    marginBottom: 4,
    color: theme.textMajor,
    fontSize: 16,
    fontFamily: "Open Sans Regular",
    fontWeight: 600,
    fontStyle: "normal",
  },
  checkboxesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    borderTop: "1px solid " + theme.borderDefault,
    width: "100%",
    boxSizing: "border-box",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: 16,
    position: "relative",
    cursor: "pointer",
  },
  checkbox: {
    border: "none",
    marginRight: 8,

    appearance: "none",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    outline: "none",
    cursor: "pointer",
    borderColor: theme.borderDefaultMinor,
    backgroundColor: theme.borderDefaultMinor,

    "&:checked": {
      backgroundColor: theme.backgroundPrimary,
    },

    "&:checked + $dot": {
      width: 10,
      height: 10,
    },
  },
  dot: {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "14px",
    transform: "translate(-50%, -50%)",
    width: 19,
    height: 19,
    borderRadius: "50%",
    backgroundColor: theme.backgroundSurface,
    cursor: "pointer",
  },
  yesOrNoLabel: {
    fontFamily: "Open Sans Regular",
    fontSize: 16,
    color: theme.textMajor,
    cursor: "pointer",
  },
}));

export default useStyles;
