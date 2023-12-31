import React from "react";
import { ITheme } from "ccmtypes";
import { InputProps } from "../inputs/input/Input";
import { ISearchInputProps } from "../inputs/searchInput/SearchInput";
import { IButtonProps } from "../button/Button";
import { ISelectorProps } from "../inputs/selector/Selector";
import { IDatePickerProps } from "../inputs/datePicker/DatePicker";
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
export declare enum TableFilterTypeEnum {
    DatePicker = "DatePicker",
    Selector = "Selector"
}
export interface ITableFilterProps {
    filterType: TableFilterTypeEnum;
    datePickerInputProps?: IDatePickerProps;
    selectorInputProps?: ISelectorProps;
}
export interface IContainedTableProps {
    title: string;
    isContained: boolean;
    searchInputProps?: ISearchInputProps;
    buttonProps?: IButtonProps[];
    filtersInputsProps?: ITableFilterProps[];
    filtersText?: string;
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
