import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./button.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export enum ButtonTypeEnum {
  Confirm = "Confirm",
  Cancel = "Cancel",
}

export interface IButtonProps {
  label: string;
  theme?: ITheme;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: ButtonTypeEnum;
  prefix?: React.FunctionComponent;
  hoverPrefix?: React.FunctionComponent;
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
        }[props.buttonType || ButtonTypeEnum.Confirm]
      }
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {((props.prefix && !isHovered && props.hoverPrefix) ||
        (props.prefix && !props.hoverPrefix)) && <props.prefix />}
      {props.hoverPrefix && isHovered && <props.hoverPrefix />}
      <span style={{ marginLeft: props.prefix ? 10 : 0 }}>{props.label}</span>
    </button>
  );
};

export default React.memo(withThemeProvider(Button, theme));
