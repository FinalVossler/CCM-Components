import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  infoBannerContainer: {
    backgroundColor: theme.backgroundSection,
    borderRadius: 10,
    width: "100%",
    borderLeft: "10px solid " + theme.backgroundSuccess,
    display: "flex",
    fontFamily: "Open Sans Regular",
    color: theme.textMajor,
    padding: 20,
    boxSizing: "border-box",
  },
  infoBannerContainerSuccess: {
    extend: "infoBannerContainer",
    borderColor: theme.textSuccess,
    "& path": {
      fill: theme.textSuccess,
    },
  },
  infoBannerContainerInfo: {
    extend: "infoBannerContainer",
    borderColor: theme.textInfoStrong,

    "& path": {
      fill: theme.textInfoStrong,
    },
  },
  infoBannerContainerError: {
    extend: "infoBannerContainer",
    borderColor: theme.textDanger,
    "& path": {
      fill: theme.textDanger,
    },
  },
  infoBannerContainerWarning: {
    extend: "infoBannerContainer",
    borderColor: theme.textWarningStrong,
    "& path": {
      fill: theme.textWarningStrong,
    },
  },
  titleAndDescriptionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontFamily: "Open Sans Bold",
    fontSize: 16,
    fontWeight: "bold",
    display: "block",
    textAlign: "start",
  },
  description: {
    fontFamily: "Open Sans Regular",
    fontStyle: "normal",
    marginBottom: 0,
    marginTop: 10,
  },
}));

export default useStyles;
