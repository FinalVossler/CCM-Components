import React from "react";
import { ITheme } from "ccmtypes";
export interface ITabOption {
    title: string;
    id?: string;
}
export interface ITabsProps {
    options: ITabOption[];
    theme?: ITheme;
    onOptionClick?: (option: ITabOption) => void;
}
declare const _default: React.MemoExoticComponent<(props: ITabsProps) => React.JSX.Element>;
export default _default;
