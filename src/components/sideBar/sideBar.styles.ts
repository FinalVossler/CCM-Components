import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  layer: {
    zIndex: 3,
    position: "fixed",
    width: "calc(100vw * 2)",
    height: "calc(100vh * 2)",
    top: -100,
    left: -100,
    backgroundColor: theme.backgroundSurface,
    opacity: 0.7,
  },
  sideBarContainer: {
    zIndex: 10,
    position: "relative",
    backgroundColor: theme.backgroundSectionMajor,
    padding: 12,
    paddingTop: 2.5,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Open Sans Regular",
    width: 306,
    transition: "all .15s ease-in-out",
    overflow: "auto",

    overflowX: "hidden",
  },
  sideBarClosedContainer: {
    extend: "sideBarContainer",
    width: 60,
    padding: 0,
    paddingBottom: 12,
    paddingTop: 2.5,

    "& $sideBarSectionTitle": {
      opacity: 0,
    },
    "& $sideBarOptionContainer": {
      justifyContent: "center",
      paddingLeft: 5,
      paddingRight: 5,
    },
    "& $sideBarOption": {
      paddingRight: 0,
      paddingLeft: 0,
    },

    "& svg": {
      left: 13,
      position: "relative",
    },
  },
  sideBarTriggerIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    cursor: "pointer",
    position: "relative",
    top: 5,

    "& svg": {
      height: 40,
    },
  },
  sideBarTriggerIcon: {
    transition: "transform .2s ease-in-out",
  },
  sideBarTriggerIconSideBarOpen: {
    transform: "rotateZ(180deg)",
  },
  sideBarLine: {
    width: "100%",
    borderBottom: "1px solid " + theme.borderDefault,
    marginTop: 16,
    marginBottom: 10,
  },
  sideBarSectionContainer: {
    display: "flex",
    flexDirection: "column",
  },
  sideBarSectionTitle: {
    color: theme.textMinor,
    fontWeight: 700,
    fontSize: 13,
    position: "relative",
    left: 15,
    whiteSpace: "nowrap",
  },
  sideBarOptionContainer: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    paddingRight: 12,
    paddingLeft: 12,

    marginTop: 1,
    marginBottom: 1,
  },
  sideBarOption: {
    display: "flex",
    fontSize: 13,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 40,
    padding: 5,

    "&:hover": {
      backgroundColor: theme.textSuccess,
    },
  },
  sideBarOptionTitle: {
    color: theme.textMajor,
    marginLeft: 20,
    position: "absolute",
    left: 60,
    whiteSpace: "nowrap",
  },
  sideBarIcon: {
    transition: "all .1s ease-in-out",
  },
}));

export default useStyles;
