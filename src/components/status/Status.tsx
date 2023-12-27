import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./status.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export enum StatusTypeEnum {
  Danger = "Danger",
  Warning = "Warning",
  Success = "Success",
  Info = "Info",
}

export interface IStatusProps {
  label: string;
  theme?: ITheme;
  statusType: StatusTypeEnum;
}

const Status: React.FunctionComponent<IStatusProps> = (props: IStatusProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <span
      className={
        {
          [StatusTypeEnum.Success]: styles.statusSuccess,
          [StatusTypeEnum.Info]: styles.statusInfo,
          [StatusTypeEnum.Danger]: styles.statusDanger,
          [StatusTypeEnum.Warning]: styles.statusWarning,
        }[props.statusType]
      }
    >
      {props.label}
    </span>
  );
};

export default React.memo(withThemeProvider(Status, theme));
