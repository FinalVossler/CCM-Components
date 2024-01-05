import React from "react";
import { ITheme } from "ccmtypes";
export interface ITextareProps {
    theme?: ITheme;
    textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    label?: string;
}
declare const _default: React.NamedExoticComponent<ITextareProps>;
export default _default;
