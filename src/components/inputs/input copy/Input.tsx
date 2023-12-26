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
  maxCharacters?: number;
}

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const [value, setValue] = React.useState(props.value || "");

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      props.maxCharacters &&
      e.target.value.toString().length > props.maxCharacters
    ) {
      return;
    }
    setValue(e.target.value);
  };
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
        onChange={handleOnChange}
        value={value}
        {...(props.onClick ? { onClick: props.onClick } : {})}
        {...(props.onChange ? { onChange: props.onChange } : {})}
      />

      {props.maxCharacters && (
        <span className={styles.maxCharacters}>
          {value.toString().length + "/" + props.maxCharacters}
        </span>
      )}
    </div>
  );
};

export default React.memo(withThemeProvider(Input, theme));
