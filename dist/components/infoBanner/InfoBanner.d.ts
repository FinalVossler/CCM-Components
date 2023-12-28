import React from "react";
import { ITheme } from "ccmtypes";
export declare enum InfoBannerTypeEnum {
    Success = "Success",
    Info = "Info",
    Error = "Error",
    Warning = "Warning"
}
export interface IInfoBannerProps {
    title: string;
    description: string;
    theme?: ITheme;
    infoBannerType: InfoBannerTypeEnum;
}
declare const _default: React.MemoExoticComponent<(props: IInfoBannerProps) => React.JSX.Element>;
export default _default;
