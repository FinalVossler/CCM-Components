import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./title.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface ITitleProps extends React.PropsWithChildren {
  theme?: ITheme;
  title: string;
}

const Title: React.FunctionComponent<ITitleProps> = (props: ITitleProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return <h2 className={styles.title}>{props.title}</h2>;
};

export default React.memo(withThemeProvider(Title, theme));
