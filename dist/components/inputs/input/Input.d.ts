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
    minWidth?: number;
    suffixIcon?: React.FunctionComponent<IIconProps>;
}
declare const _default: React.MemoExoticComponent<(props: InputProps) => React.JSX.Element>;
export default _default;
