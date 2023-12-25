import React from "react";
import { ITheme } from "ccmtypes";
import "../fonts.css";
export interface IWithThemeProviderProps<T> {
    Component: React.FunctionComponent<T>;
    theme: ITheme;
}
declare const withThemeProvider: <T extends Object>(Component: React.FunctionComponent<T>, theme: ITheme) => (props: T) => React.JSX.Element;
export default withThemeProvider;
