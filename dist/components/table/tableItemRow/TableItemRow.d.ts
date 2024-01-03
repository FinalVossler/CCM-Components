import React from "react";
import { ITheme } from "ccmtypes";
import { ITableColumn, ITableElement } from "../Table";
interface IItemRow<T extends ITableElement> {
    data: T[];
    elementIndex: number;
    handleTriggerSelectElement: (element: T) => (e: React.MouseEvent<HTMLTableCellElement>) => void;
    columns: ITableColumn<T>[];
    theme?: ITheme;
    selectedElementsIds: (string | number)[];
    element: T;
    selectableElements?: boolean;
    handleCheckboxClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const _default: React.NamedExoticComponent<IItemRow<ITableElement>>;
export default _default;
