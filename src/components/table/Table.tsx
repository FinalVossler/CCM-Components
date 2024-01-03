import React from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";
import ColumnResizer from "react-table-column-resizer";

import withThemeProvider from "../../hoc/withThemeProvider";

import useStyles from "./table.styles";
import Input from "../inputs/input";
import { InputProps } from "../inputs/input/Input";
import TableContainerHeader from "./tableContainerHeader";
import { ISearchInputProps } from "../inputs/searchInput/SearchInput";
import { IButtonProps } from "../button/Button";
import { ISelectorProps } from "../inputs/selector/Selector";
import { IDatePickerProps } from "../inputs/datePicker/DatePicker";
import TableItemRow from "./tableItemRow";

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

export enum TableFilterTypeEnum {
  DatePicker = "DatePicker",
  Selector = "Selector",
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
  const [tableIsShown, setTableIsShown] = React.useState<boolean>(true);
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

  const handleTriggerSelectElement = React.useCallback(
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
    },
    [selectedElementsIds, setSelectedElementsIds]
  );

  const handleCheckboxClick = React.useCallback(
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
    },
    []
  );

  const handleColumnSearch =
    (column: ITableColumn<T>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      column.handleSearch(e.target.value);
    };

  const handleTriggerShowTable = () => setTableIsShown(!tableIsShown);
  //#endregion event listeners

  return (
    <div
      {...(props.containedProps?.isContained
        ? { className: styles.containedTableContainer }
        : {})}
      style={{
        ...(tableIsShown ? { paddingBottom: 16 } : {}),
      }}
    >
      {props.containedProps?.isContained && (
        <TableContainerHeader
          handleTriggerShowTable={handleTriggerShowTable}
          tableIsShown={tableIsShown}
          title={props.containedProps.title}
          searchInputProps={props.containedProps.searchInputProps}
          buttonsProps={props.containedProps.buttonProps}
          filtersInputsProps={props.containedProps.filtersInputsProps}
          fitlersText={props.containedProps.filtersText}
        />
      )}
      <div
        style={{
          ...(props.height
            ? { maxHeight: props.height, overflowY: "auto" }
            : {}),
          display: tableIsShown ? "block" : "none",
        }}
      >
        <table
          className={styles.tableContainer}
          cellSpacing="0"
          cellPadding="0"
        >
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
              <tr className={styles.tableSearchRow}>
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
                    <React.Fragment key={columnIndex}>
                      <td className={styles.tableSearchColumn}>
                        {Boolean(column.handleSearch) && (
                          <Input
                            {...column.searchInputProps}
                            onChange={handleColumnSearch(column)}
                          />
                        )}
                      </td>
                      <TableColumnResizer
                        id={
                          columnIndex + Math.floor(Math.random() * 1000) + 1000
                        }
                      />
                    </React.Fragment>
                  );
                })}
              </tr>
            )}
            {props.data.map((element, elementIndex) => {
              return (
                <TableItemRow
                  data={props.data}
                  elementIndex={elementIndex}
                  handleTriggerSelectElement={handleTriggerSelectElement}
                  columns={props.columns}
                  theme={props.theme}
                  selectedElementsIds={selectedElementsIds}
                  element={element}
                  selectableElements={props.selectableElements}
                  handleCheckboxClick={handleCheckboxClick}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface ITableColumnResizer {
  id: number;
}

export const TableColumnResizer = (props: ITableColumnResizer) => {
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
