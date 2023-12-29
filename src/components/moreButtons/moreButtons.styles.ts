import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  moreButtonsContainer: {
    cursor: "pointer",
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid " + theme.borderPrimary,
    position: "relative",
  },
  dots: {
    color: theme.textPrimary,
    position: "relative",
    bottom: 7,
    fontSize: 28,
    left: -1,
  },

  popupContainer: {
    position: "absolute",
    width: 250,
    border: "1px solid " + theme.borderDefault,
    backgroundColor: theme.backgroundSection,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    zIndex: 1,
  },

  popupContainerTopRight: {
    bottom: "100%",
    left: "100%",
  },
  popupContainerBottomRight: {
    top: "100%",
    left: "100%",
  },
  popupContainerTopLeft: {
    bottom: "100%",
    right: "100%",
  },
  popupContainerBottomLeft: {
    top: "100%",
    right: "100%",
  },
}));

export default useStyles;
