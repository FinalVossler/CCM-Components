import React from "react";
import { ITheme } from "ccmtypes";
export declare enum ButtonTypeEnum {
    Confirm = "Confirm",
    Cancel = "Cancel",
    Default = "Default"
}
export interface IShowHideIndicator {
    isShown?: boolean;
    handleTrigger: () => void;
    theme?: ITheme;
}
declare const _default: React.MemoExoticComponent<(props: IShowHideIndicator) => React.JSX.Element>;
export default _default;
