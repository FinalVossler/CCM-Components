import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  infoSectionContainer: {
    paddingTop: 6,
    paddingBottom: 6,
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid " + theme.textMajor,
    borderBottom: "1px solid " + theme.textMajor,
  },
}));

export default useStyles;
