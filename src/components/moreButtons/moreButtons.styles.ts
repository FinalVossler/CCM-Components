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
    boxSizing: "border-box",
  },
  dots: {
    color: theme.textPrimary,
    position: "relative",
    bottom: 7,
    fontSize: 28,
    left: -1,
  },
  verticalDotsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  verticalButtonsSpan: {
    position: "relative",
    top: 2,
  },
  dot: {
    color: theme.textPrimary,
    fontSize: 28,
    height: 5,
  },
  popupContainer: {
    position: "absolute",
    width: "max-content",
    border: "1px solid " + theme.borderDefault,
    backgroundColor: theme.backgroundSection,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    zIndex: 2,
  },

  popupContainerTopRight: {
    bottom: "70%",
    left: "110%",
  },
  popupContainerBottomRight: {
    top: "70%",
    left: "110%",
  },
  popupContainerTopLeft: {
    bottom: "70%",
    right: "110%",
  },
  popupContainerBottomLeft: {
    top: "70%",
    right: "110%",
  },
}));

export default useStyles;
