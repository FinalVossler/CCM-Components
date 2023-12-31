import React from "react";
import { ITheme } from "ccmtypes";
import { ISearchInputProps } from "../../inputs/searchInput/SearchInput";
import { IButtonProps } from "../../button/Button";
import { ITableFilterProps } from "../Table";
export interface ITableContainerHeaderProps {
    title: string;
    handleTriggerShowTable: () => void;
    tableIsShown: boolean;
    theme?: ITheme;
    searchInputProps?: ISearchInputProps;
    buttonsProps?: IButtonProps[];
    filtersInputsProps?: ITableFilterProps[];
    fitlersText?: string;
}
declare const _default: React.NamedExoticComponent<ITableContainerHeaderProps>;
export default _default;
