import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./showHideIndicator.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export enum ButtonTypeEnum {
  Confirm = "Confirm",
  Cancel = "Cancel",
  Default = "Default",
}

export interface IShowHideIndicator {
  isShown?: boolean;
  handleTrigger: () => void;
  theme?: ITheme;
}

const ShowHideIndicator: React.FunctionComponent<IShowHideIndicator> = (
  props: IShowHideIndicator
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <span
      onClick={props.handleTrigger}
      className={
        props.isShown
          ? styles.showHideIndicatorPointingUp
          : styles.showHideIndicatorPointingDown
      }
    >
      {">"}
    </span>
  );
};

export default React.memo(withThemeProvider(ShowHideIndicator, theme));
