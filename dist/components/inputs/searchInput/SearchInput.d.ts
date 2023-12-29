import React from "react";
import { ITheme } from "ccmtypes";
export interface ISearchInputOption {
    value: string;
    label: string;
}
interface ISearchInputProps {
    placeholder: string;
    options: ISearchInputOption[];
    theme?: ITheme;
    onSelect?: (option: ISearchInputOption) => void;
    isLoading?: boolean;
}
declare const _default: React.MemoExoticComponent<(props: ISearchInputProps) => React.JSX.Element>;
export default _default;
