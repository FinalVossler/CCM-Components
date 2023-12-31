import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  modalContainer: {
    fontFamily: "Open Sans Regular",
    zIndex: 10,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  layer: {
    backgroundColor: theme.backgroundSurface,
    opacity: 0.3,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    marginBottom: 100,
    zIndex: 1,
    backgroundColor: theme.backgroundSurface,
    borderRadius: 8,
    border: "1px solid " + theme.borderDefault,
  },
  titleAndCloseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 32,
  },
  contentContainer: {
    padding: 32,
    paddingTop: 0,
  },
  closeIcon: {
    cursor: "pointer",

    width: 25,
    height: 25,
  },
  modalTitle: {
    fontFamily: "Open Sans Regular",
    fontSize: 24,
    fontWeight: 700,
    color: theme.textMajor,
    margin: 0,
    marginRight: 100,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.backgroundSectionMajor,
    padding: 16,
    borderTop: "1px solid " + theme.textMajor,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
}));

export default useStyles;
