import React from "react";
import { ITheme } from "ccmtypes";
import IIconProps from "../icons/IIconProps";
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
    prefixIcon?: React.FunctionComponent<IIconProps>;
    hoverPrefix?: React.FunctionComponent;
}
declare const _default: React.MemoExoticComponent<(props: IButtonProps) => React.JSX.Element>;
export default _default;
