import React from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";

import useStyles from "./ccmIcon.styles";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface ICCMIconProps {
  theme?: ITheme;
}

const CCMIcon: React.FunctionComponent<ICCMIconProps> = (
  props: ICCMIconProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return <span className={styles.ccmIcon}>🚀 CCM</span>;
};

export default React.memo(withThemeProvider(CCMIcon, theme));
