import React from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";
import ColumnResizer from "react-table-column-resizer";

import withThemeProvider from "../../hoc/withThemeProvider";

import useStyles from "./table.styles";
import Input from "../inputs/input";
import { InputProps } from "../inputs/input/Input";

export interface ITableElement {
  id: string | number;
}

export interface ITableColumn<T> {
  title: string;
  name: string;
  render?: React.FunctionComponent<{ element: T }>;
  handleSearch?: (searchedText: string) => void;
  searchInputProps?: InputProps;
}

export interface ITableProps<T extends ITableElement> {
  theme?: ITheme;
  columns: ITableColumn<T>[];
  data: T[];
  selectableElements?: boolean;
  height?: number;
}

const Table: React.FunctionComponent<ITableProps<ITableElement | any>> = <
  T extends ITableElement
>(
  props: ITableProps<T>
) => {
  //#region state
  const [allSelected, setAllSelected] = React.useState<boolean>(false);
  const [selectedElementsIds, setSelectedElementsIds] = React.useState<
    (string | number)[]
  >([]);
  //#endregion state

  //#region hooks
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });
  //#endregion hooks

  //#region event listeners
  const handleSelectAll = (
    e: React.MouseEvent<HTMLElement | HTMLInputElement>
  ) => {
    e.stopPropagation();
    if (allSelected) {
      setSelectedElementsIds([]);
      setAllSelected(false);
    } else {
      setSelectedElementsIds(props.data.map((el) => el.id));
      setAllSelected(true);
    }
  };

  const handleTriggerSelectElement =
    (element: T) => (e: React.MouseEvent<HTMLTableCellElement>) => {
      const selectedElementIdIndex = selectedElementsIds.findIndex(
        (el) => el === element.id
      );
      if (selectedElementIdIndex === -1) {
        setSelectedElementsIds([...selectedElementsIds, element.id]);
      } else {
        const newSelectedElementsIds = [...selectedElementsIds];
        newSelectedElementsIds.splice(selectedElementIdIndex, 1);
        if (newSelectedElementsIds.length === 0) {
          setAllSelected(false);
        }
        setSelectedElementsIds(newSelectedElementsIds);
      }
    };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };
  //#endregion event listeners

  return (
    <div
      style={{
        ...(props.height ? { maxHeight: props.height, overflowY: "auto" } : {}),
      }}
    >
      <table className={styles.tableContainer} cellSpacing="0" cellPadding="0">
        <thead className={styles.tableHeader}>
          <tr className={styles.tableHeaderRow}>
            {props.selectableElements && (
              <React.Fragment>
                <th
                  className={styles.tableColumn}
                  style={{ cursor: "pointer" }}
                  onClick={handleSelectAll}
                >
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    onChange={handleCheckboxClick}
                    checked={allSelected}
                  />
                </th>

                <TableColumnResizer id={-1} />
              </React.Fragment>
            )}
            {props.columns.map((column, columnIndex) => {
              return (
                <React.Fragment key={columnIndex}>
                  <th className={styles.tableHeaderColumn}>
                    <span
                      className={
                        columnIndex === props.columns.length - 1
                          ? styles.tableHeaderLastColumnTitle
                          : styles.tableHeaderColumnTitle
                      }
                    >
                      {column.title}
                    </span>
                  </th>

                  <TableColumnResizer id={columnIndex} />
                </React.Fragment>
              );
            })}
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {props.columns.some((c) => Boolean(c.handleSearch)) && (
            <tr className={styles.tableRow}>
              {props.selectableElements && (
                <React.Fragment>
                  <td className={styles.tableColumn}></td>
                  <TableColumnResizer
                    id={Math.floor(Math.random() * 1000) + 1000}
                  />
                </React.Fragment>
              )}
              {props.columns.map((column, columnIndex) => {
                return (
                  <React.Fragment>
                    <td className={styles.tableSearchColumn}>
                      {Boolean(column.handleSearch) && (
                        <Input {...column.searchInputProps} />
                      )}
                    </td>
                    <TableColumnResizer
                      id={columnIndex + Math.floor(Math.random() * 1000) + 1000}
                    />
                  </React.Fragment>
                );
              })}
            </tr>
          )}
          {props.data.map((element, elementIndex) => {
            return (
              <tr
                key={elementIndex}
                className={
                  (elementIndex === props.data.length - 1
                    ? styles.tableLastRow
                    : styles.tableRow) +
                  (selectedElementsIds.some((el) => el === element.id)
                    ? " " + styles.tableSelectedRow
                    : "")
                }
              >
                {props.selectableElements && (
                  <React.Fragment>
                    <td
                      className={styles.tableColumn}
                      onClick={handleTriggerSelectElement(element)}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className={styles.checkbox}
                        type="checkbox"
                        onChange={handleCheckboxClick}
                        checked={selectedElementsIds.some(
                          (el) => el === element.id
                        )}
                      />
                    </td>

                    <TableColumnResizer id={elementIndex - 10000} />
                  </React.Fragment>
                )}
                {props.columns.map((column, columnIndex) => {
                  return (
                    <React.Fragment key={columnIndex}>
                      <td className={styles.tableColumn}>
                        {(!column.render && element[column.name]) || ""}
                        {column.render && <column.render element={element} />}
                      </td>
                      <TableColumnResizer id={elementIndex + 10000} />
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

interface ITableColumnResizer {
  id: number;
}

const TableColumnResizer = (props: ITableColumnResizer) => {
  return (
    <ColumnResizer
      disabled={false}
      maxWidth={null}
      id={props.id + 10000}
      resizeStart={() => {}}
      resizeEnd={() => {}}
      className="columnResizer"
      minWidth={0}
    />
  );
};

export default React.memo(withThemeProvider(Table, theme));
