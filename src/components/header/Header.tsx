import React from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";

import useStyles from "./header.styles";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface IHeader {
  theme?: ITheme;
  right: React.FunctionComponent;
  left: React.FunctionComponent;
}

const Header: React.FunctionComponent<IHeader> = (props: IHeader) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <props.right />
      </div>
      <div className={styles.right}>
        <props.left />
      </div>
    </div>
  );
};

export default withThemeProvider(Header, theme);
