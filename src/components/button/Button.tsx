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
}

const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <button
      className={
        {
          [ButtonTypeEnum.Confirm]: styles.confirmButton,
          [ButtonTypeEnum.Cancel]: styles.cancelButton,
        }[props.buttonType || ButtonTypeEnum.Confirm]
      }
    >
      {props.label}
    </button>
  );
};

export default React.memo(withThemeProvider(Button, theme));
