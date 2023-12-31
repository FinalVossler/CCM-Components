import { ITheme } from "ccmtypes";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  tableContainerHeader: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 2,
    flexDirection: "column",
    fontFamily: "Open Sans Regular",
  },
  titleAndOptionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
  },
  titleAndShowIndicator: {
    display: "flex",
    alignItems: "center",
  },
  tableTitle: {
    fontSize: 24,
    marginBottom: 8,
    marginTop: 8,
    fontWeight: 400,
    fontFamily: "Open Sans SemiBold",
    color: theme.textMajor,
  },
  optionsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    zIndex: 2,
  },
  filtersText: {
    color: theme.textMajor,
    fontSize: 14,
    marginRight: 20,
  },
  filtersContainer: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
    gap: 10,
    zIndex: 1,
  },
}));

export default useStyles;
