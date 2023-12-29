import React from "react";
import { ITheme } from "ccmtypes";
export interface IHeader {
    theme?: ITheme;
    right: React.FunctionComponent;
    left: React.FunctionComponent;
}
declare const _default: React.MemoExoticComponent<(props: IHeader) => React.JSX.Element>;
export default _default;
