import React from "react";
import { ITheme } from "ccmtypes";
import { ThemeProvider } from "react-jss";

import "../fonts.css";

export interface IWithThemeProviderProps<T> {
  Component: React.FunctionComponent<T>;
  theme: ITheme;
}

const withThemeProvider =
  <T extends Object>(
    Component: React.FunctionComponent<T>,
    theme: ITheme
  ): React.FunctionComponent<T> =>
  (props: T) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };

export default withThemeProvider;
