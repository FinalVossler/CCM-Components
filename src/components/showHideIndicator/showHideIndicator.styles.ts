import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  showHideIndicatorPointingDown: {
    color: theme.textMinor,
    fontSize: 20,
    cursor: "pointer",
    transform: "rotateZ(90deg)",
    position: "relative",
    top: 3,
    padding: 15,

    "&:hover": {
      color: theme.textMajor,
    },
  },
  showHideIndicatorPointingUp: {
    extend: "showHideIndicatorPointingDown",
    transform: "rotateZ(-90deg)",
  },
}));

export default useStyles;
