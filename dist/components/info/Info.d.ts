import React from "react";
import { ITheme } from "ccmtypes";
export interface IInfoProps {
    theme?: ITheme;
    title: string;
    value: string;
}
declare const _default: React.MemoExoticComponent<(props: IInfoProps) => React.JSX.Element>;
export default _default;
