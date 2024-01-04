import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./info.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface IInfoProps {
  theme?: ITheme;
  title: string;
  value: string;
}

const Info: React.FunctionComponent<IInfoProps> = (props: IInfoProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <div className={styles.infoContainer}>
      <span className={styles.infoTitle}>{props.title} :</span>
      <span className={styles.infoValue}>{props.value}</span>
    </div>
  );
};

export default React.memo(withThemeProvider(Info, theme));
