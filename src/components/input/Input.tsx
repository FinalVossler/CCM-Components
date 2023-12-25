import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./input.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

interface InputProps {
  label: string;
  placeholder: string;
  theme?: ITheme;
  fullWidth?: boolean;
}

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <div
      className={
        props.fullWidth ? styles.fullWidthContainer : styles.inputContainer
      }
    >
      <label className={styles.label}>{props.label}</label>

      <input className={styles.input} placeholder={props.placeholder} />
    </div>
  );
};

export default withThemeProvider(Input, theme);
