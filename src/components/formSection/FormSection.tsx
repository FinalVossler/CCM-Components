import React from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";

import useStyles from "./formSection.styles";
import withThemeProvider from "../../hoc/withThemeProvider";

interface IFormSectionProps extends React.PropsWithChildren {
  theme?: ITheme;
}

const Input: React.FunctionComponent<IFormSectionProps> = (
  props: IFormSectionProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return <div className={styles.formSectionContainer}>{props.children}</div>;
};

export default React.memo(withThemeProvider(Input, theme));
