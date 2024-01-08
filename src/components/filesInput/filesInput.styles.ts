import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  filesInputContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: 12,
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: theme.backgroundSurface,
  },
  filesContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    minHeight: "49.5px",
  },
  singleFileContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.textMajor,
    border: "1px solid " + theme.borderDefault,
    borderRadius: 8,
    padding: "1px 10px",
    paddingRight: 5,
  },
  fileName: {},
  crossIcon: {
    cursor: "pointer",
    padding: 5,
    marginLeft: 5,
    width: 25,
    height: 25,

    "&:hover": {
      "& path": {
        fill: theme.textDanger,
      },
    },
  },
}));

export default useStyles;
