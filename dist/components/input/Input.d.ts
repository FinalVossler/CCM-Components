import React from "react";
import { ITheme } from "ccmtypes";
interface InputProps {
    label: string;
    placeholder: string;
    theme?: ITheme;
    fullWidth?: boolean;
}
declare const _default: (props: InputProps) => React.JSX.Element;
export default _default;
