import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./input.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../../hoc/withThemeProvider";
import IIconProps from "../../icons/IIconProps";

export interface InputProps {
  label?: string;
  placeholder: string;
  theme?: ITheme;
  fullWidth?: boolean;
  value?: string | number;
  type?: string;
  onClick?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  maxCharacters?: number;
  minWidth?: number;
  suffixIcon?: React.FunctionComponent<IIconProps>;
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
      style={{
        minWidth: props.minWidth || 270,
        ...(!props.label ? { padding: 0 } : {}),
      }}
    >
      {props.label && <label className={styles.label}>{props.label}</label>}

      <input
        type={props.type || "text"}
        className={styles.input}
        placeholder={props.placeholder}
        onChange={handleOnChange}
        value={value}
        {...(props.onClick ? { onClick: props.onClick } : {})}
        {...(props.onChange ? { onChange: props.onChange } : {})}
        {...(props.suffixIcon || props.maxCharacters
          ? {
              style: {
                paddingRight: props.suffixIcon && props.maxCharacters ? 60 : 30,
              },
            }
          : {})}
      />

      {props.maxCharacters && (
        <span
          className={styles.maxCharacters}
          style={{ ...(props.suffixIcon ? { right: 60 } : {}) }}
        >
          {value.toString().length + "/" + props.maxCharacters}
        </span>
      )}

      {props.suffixIcon && (
        <props.suffixIcon
          className={
            props.label ? styles.suffixIcon : styles.suffixIconWithoutLabel
          }
        />
      )}
    </div>
  );
};

export default React.memo(withThemeProvider(Input, theme));
