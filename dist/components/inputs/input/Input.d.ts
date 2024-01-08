import React from "react";
import { ITheme } from "ccmtypes";
import IIconProps from "../../icons/IIconProps";
export interface InputProps {
    label?: string;
    placeholder: string;
    theme?: ITheme;
    fullWidth?: boolean;
    value?: string | number;
    type?: string;
    onClick?: () => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    maxCharacters?: number;
    minWidth?: string;
    suffixIcon?: React.FunctionComponent<IIconProps>;
    error?: string;
    maxWidth?: string;
    disabled?: boolean;
}
declare const _default: React.NamedExoticComponent<InputProps>;
export default _default;
