import React, { ReactNode } from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";

import useStyles from "./formSection.styles";
import withThemeProvider from "../../hoc/withThemeProvider";

interface IFormSectionProps extends React.PropsWithChildren {
  title?: string;
  theme?: ITheme;
  children: ReactNode;
}

const FormSection: React.FunctionComponent<IFormSectionProps> = (
  props: IFormSectionProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <div className={styles.formSectionContainer}>
      {props.title && <h2 className={styles.title}>{props.title}</h2>}
      <div className={styles.inputsContainer}>{props.children}</div>
    </div>
  );
};

export default React.memo(withThemeProvider(FormSection, theme));
