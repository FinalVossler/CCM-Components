import React, { CSSProperties } from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./button.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";
import IIconProps from "../icons/IIconProps";

export enum ButtonTypeEnum {
  Confirm = "Confirm",
  Cancel = "Cancel",
  Default = "Default",
}

export interface IButtonProps {
  label: string;
  theme?: ITheme;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: ButtonTypeEnum;
  prefixIcon?: React.FunctionComponent<IIconProps>;
  hoverPrefix?: React.FunctionComponent;
  withoutBorder?: boolean;
  style?: CSSProperties;
}

const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleOnMouseOver = () => setIsHovered(true);
  const handleOnMouseOut = () => setIsHovered(false);

  return (
    <button
      className={
        {
          [ButtonTypeEnum.Confirm]: styles.confirmButton,
          [ButtonTypeEnum.Cancel]: styles.cancelButton,
          [ButtonTypeEnum.Default]: styles.defaultButton,
        }[props.buttonType || ButtonTypeEnum.Confirm] +
        (props.withoutBorder ? " " + styles.withoutBorder : "")
      }
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      {...(props.onClick ? { onClick: props.onClick } : {})}
      {...(props.style ? { style: props.style } : {})}
    >
      {((props.prefixIcon && !isHovered && props.hoverPrefix) ||
        (props.prefixIcon && !props.hoverPrefix)) && <props.prefixIcon />}
      {props.hoverPrefix && isHovered && <props.hoverPrefix />}
      <span style={{ marginLeft: props.prefixIcon ? 10 : 0 }}>
        {props.label}
      </span>
    </button>
  );
};

export default React.memo(withThemeProvider(Button, theme));
