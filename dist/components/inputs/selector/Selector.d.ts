import React from "react";
import { ITheme } from "ccmtypes";
export interface ISelectorOption {
    value: string;
    label: string;
}
export interface ISelectorProps {
    label?: string;
    placeholder: string;
    options: ISelectorOption[];
    theme?: ITheme;
    isMulti?: boolean;
    onChange?: (newValue: ISelectorOption[] | ISelectorOption) => void;
    minWidth?: string;
    maxWidth?: string;
    error?: string;
    value?: ISelectorOption[] | ISelectorOption;
    disabled?: boolean;
}
declare const _default: React.NamedExoticComponent<ISelectorProps>;
export default _default;
