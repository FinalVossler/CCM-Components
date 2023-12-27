import React from "react";
import { ITheme } from "ccmtypes";
export declare enum StatusTypeEnum {
    Danger = "Danger",
    Warning = "Warning",
    Success = "Success",
    Info = "Info"
}
export interface IStatusProps {
    label: string;
    theme?: ITheme;
    statusType: StatusTypeEnum;
}
declare const _default: React.MemoExoticComponent<(props: IStatusProps) => React.JSX.Element>;
export default _default;
