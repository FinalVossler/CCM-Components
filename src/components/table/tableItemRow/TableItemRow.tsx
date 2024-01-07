import React from "react";

import useStyles from "./tableItemRow.styles";
import useTableStyles from "../table.styles";
import { ITheme } from "ccmtypes";
import { ITableColumn, ITableElement, TableColumnResizer } from "../Table";

interface IItemRow<T extends ITableElement> {
  data: T[];
  elementIndex: number;
  handleTriggerSelectElement: (
    element: T
  ) => (e: React.MouseEvent<HTMLTableCellElement>) => void;
  columns: ITableColumn<T>[];
  theme?: ITheme;
  selectedElementsIds: (string | number)[];
  element: T;
  selectableElements?: boolean;
  handleCheckboxClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemRow: React.FunctionComponent<IItemRow<ITableElement>> = <
  T extends ITableElement
>(
  props: IItemRow<T>
) => {
  const styles = useStyles({ theme: props.theme });
  const tableStyles = useTableStyles({ theme: props.theme });

  return (
    <tr
      key={props.elementIndex}
      className={
        (props.elementIndex === props.data.length - 1
          ? styles.tableLastRow
          : styles.tableRow) +
        (props.selectedElementsIds.some((el) => el === props.element.id)
          ? " " + styles.tableSelectedRow
          : "")
      }
    >
      {props.selectableElements && (
        <React.Fragment>
          <td
            className={tableStyles.tableColumn}
            onClick={props.handleTriggerSelectElement(props.element)}
            style={{ cursor: "pointer" }}
          >
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={props.handleCheckboxClick}
              checked={props.selectedElementsIds.some(
                (el) => el === props.element.id
              )}
            />
          </td>

          <TableColumnResizer id={props.elementIndex - 10000} disabled />
        </React.Fragment>
      )}
      {props.columns.map((column, columnIndex) => {
        return (
          <React.Fragment key={columnIndex}>
            <td className={tableStyles.tableColumn}>
              {(!column.render && props.element[column.name]) || ""}
              {column.render && <column.render element={props.element} />}
            </td>
            <TableColumnResizer id={props.elementIndex + 10000} disabled />
          </React.Fragment>
        );
      })}
    </tr>
  );
};

export default React.memo(ItemRow);
