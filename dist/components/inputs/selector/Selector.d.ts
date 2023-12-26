import React from "react";
import { ITheme } from "ccmtypes";
export interface ISelectorOption {
    value: string;
    label: string;
}
interface ISelectorProps {
    label: string;
    placeholder: string;
    options: ISelectorOption[];
    theme?: ITheme;
    isMulti?: boolean;
    onChange?: (newValue: ISelectorOption) => void;
}
declare const _default: React.MemoExoticComponent<(props: ISelectorProps) => React.JSX.Element>;
export default _default;
