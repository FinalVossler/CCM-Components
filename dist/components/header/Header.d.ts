import React from "react";
import { ITheme } from "ccmtypes";
export interface IHeader {
    theme?: ITheme;
    right: React.FunctionComponent;
    left: React.FunctionComponent;
}
declare const _default: React.NamedExoticComponent<IHeader>;
export default _default;
