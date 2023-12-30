import React from "react";
import { ITheme } from "ccmtypes";
import { InputProps } from "../inputs/input/Input";
export interface ITableElement {
    id: string | number;
}
export interface ITableColumn<T> {
    title: string;
    name: string;
    render?: React.FunctionComponent<{
        element: T;
    }>;
    handleSearch?: (searchedText: string) => void;
    searchInputProps?: InputProps;
}
export interface IContainedTableProps {
    title: string;
    isContained: boolean;
}
export interface ITableProps<T extends ITableElement> {
    theme?: ITheme;
    columns: ITableColumn<T>[];
    data: T[];
    selectableElements?: boolean;
    height?: number;
    containedProps?: IContainedTableProps;
}
declare const _default: React.MemoExoticComponent<(props: ITableProps<any>) => React.JSX.Element>;
export default _default;
