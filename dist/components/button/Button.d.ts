import React, { CSSProperties } from "react";
import { ITheme } from "ccmtypes";
import IIconProps from "../icons/IIconProps";
export declare enum ButtonTypeEnum {
    Confirm = "Confirm",
    Cancel = "Cancel",
    Default = "Default"
}
export interface IButtonProps {
    label: string;
    theme?: ITheme;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    buttonType?: ButtonTypeEnum;
    prefixIcon?: React.FunctionComponent<IIconProps>;
    hoverPrefix?: React.FunctionComponent;
    withoutBorder?: boolean;
    style?: CSSProperties;
}
declare const _default: React.NamedExoticComponent<IButtonProps>;
export default _default;
