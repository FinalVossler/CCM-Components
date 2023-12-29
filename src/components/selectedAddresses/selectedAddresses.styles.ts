import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  selectedAddressesContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 14px",
    fontFamily: "Open Sans Regular",
    justifyContent: "center",
    backgroundColor: theme.backgroundGrey,
    borderRadius: 8,
    width: "max-content",
    height: 16,
    cursor: "pointer",
  },
  title: {
    fontSize: 16,
    color: theme.textMajor,
  },
  numberOfSelectedAddresses: {
    backgroundColor: theme.backgroundDisabled,
    padding: "0px 10px",
    color: theme.textReverse,
    fontSize: 16,
    marginLeft: 16,
    borderRadius: 16,
  },
}));

export default useStyles;
