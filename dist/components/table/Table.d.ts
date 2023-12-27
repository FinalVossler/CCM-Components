import React from "react";
import { ITheme } from "ccmtypes";
export interface ITableElement {
    id: string | number;
}
export interface ITableColumn<T> {
    title: string;
    name: string;
    render?: React.FunctionComponent<{
        element: T;
    }>;
}
export interface ITableProps<T extends ITableElement> {
    theme?: ITheme;
    columns: ITableColumn<T>[];
    data: T[];
    selectableElements?: boolean;
    height?: number;
}
declare const _default: React.MemoExoticComponent<(props: ITableProps<any>) => React.JSX.Element>;
export default _default;
