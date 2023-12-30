import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./infoSection.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface IInfoProps extends React.PropsWithChildren {
  theme?: ITheme;
}

const InfoSection: React.FunctionComponent<IInfoProps> = (
  props: IInfoProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return <div className={styles.infoSectionContainer}>{props.children}</div>;
};

export default React.memo(withThemeProvider(InfoSection, theme));
