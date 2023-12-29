import React from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";

import useStyles from "./selectedAddresses.styles";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface ISelectedAddresses {
  theme?: ITheme;
  title: string;
  numberOfSelectedAddressesTitle: string;
  onClick?: () => void;
}

const SelectedAddresses: React.FunctionComponent<ISelectedAddresses> = (
  props: ISelectedAddresses
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <span
      className={styles.selectedAddressesContainer}
      {...(props.onClick ? { onClick: props.onClick } : {})}
    >
      <span className={styles.title}>{props.title}</span>
      <span className={styles.numberOfSelectedAddresses}>
        {props.numberOfSelectedAddressesTitle}
      </span>
    </span>
  );
};

export default React.memo(withThemeProvider(SelectedAddresses, theme));
