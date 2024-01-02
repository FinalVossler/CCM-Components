import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  emailBoxesContainer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    gap: 4,
    fontFamily: "Open Sans Regular",
    alignItems: "flex-end",
    overflow: "auto",
    maxWidth: "100vw",
    zIndex: 11,
  },
  reducedEmailBoxContainer: {
    padding: 12,
    backgroundColor: theme.backgroundSectionMajor,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    boxSizing: "border-box",
    width: 260,
    minWidth: 260,
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "1px 1px 10px 1px black",
    marginTop: 10,
    marginLeft: 4,
    cursor: "pointer",
  },
  emailBoxTitle: {
    color: theme.textMajor,
    fontSize: 14,
  },
  emailBoxIconsContainer: {
    display: "flex",
    alignItems: "center",
  },
  emailBoxIcon: {
    cursor: "pointer",
    position: "relative",
    paddingRight: 4,
    paddingLeft: 4,
    top: 2,
  },

  activeEmailBoxContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.backgroundSurface,
    height: 700,
    width: 800,
    minWidth: 800,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    boxShadow: "1px 1px 10px 1px black",
    marginTop: 10,
    marginLeft: 4,
    overflow: "auto",
  },
  activeEmailBoxFullScreenContainer: {
    extend: "activeEmailBoxContainer",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    marginTop: 0,
    marginLeft: 0,
    zIndex: 1,

    "& $activeEmailBoxTitleAndIcons": {
      borderRadius: 0,
    },
  },
  activeEmailBoxTitleAndIcons: {
    padding: 12,
    backgroundColor: theme.backgroundSectionMajor,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));

export default useStyles;
