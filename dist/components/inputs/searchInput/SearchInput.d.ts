import React from "react";
import { ITheme } from "ccmtypes";
export interface ISearchInputOption {
    value: string;
    label: string;
}
export interface ISearchInputProps {
    placeholder: string;
    options: ISearchInputOption[];
    theme?: ITheme;
    onSelect?: (option: ISearchInputOption) => void;
    isLoading?: boolean;
}
declare const _default: React.NamedExoticComponent<ISearchInputProps>;
export default _default;
