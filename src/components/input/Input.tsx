import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./input.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface InputProps {
  label: string;
  placeholder: string;
  theme?: ITheme;
  fullWidth?: boolean;
  value?: string | number;
  type?: string;
  onClick?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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

      <input
        type={props.type || "text"}
        className={styles.input}
        placeholder={props.placeholder}
        {...(props.value ? { value: props.value } : {})}
        {...(props.onClick ? { onClick: props.onClick } : {})}
        {...(props.onChange ? { onChange: props.onChange } : {})}
      />
    </div>
  );
};

export default React.memo(withThemeProvider(Input, theme));
