import React from "react";
import { ITheme } from "ccmtypes";
export declare enum ButtonTypeEnum {
    Confirm = "Confirm",
    Cancel = "Cancel"
}
export interface IButtonProps {
    label: string;
    theme?: ITheme;
    disabled?: boolean;
    onClick?: () => void;
    buttonType?: ButtonTypeEnum;
}
declare const _default: React.MemoExoticComponent<(props: IButtonProps) => React.JSX.Element>;
export default _default;
