import React from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";

import useStyles from "./aside.styles";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface IAsideProps extends React.PropsWithChildren {
  theme?: ITheme;
}

const Aside: React.FunctionComponent<IAsideProps> = (props: IAsideProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return <div className={styles.asideContainer}>{props.children}</div>;
};

export default React.memo(withThemeProvider(Aside, theme));
