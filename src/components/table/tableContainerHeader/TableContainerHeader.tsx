import React from "react";

import ShowHideIndicator from "../../showHideIndicator";
import useStyles from "./tableContainerHeader.styles";
import { ITheme } from "ccmtypes";
import { useTheme } from "react-jss";
import SearchInput, {
  ISearchInputProps,
} from "../../inputs/searchInput/SearchInput";
import Button, { IButtonProps } from "../../button/Button";
import { ITableFilterProps, TableFilterTypeEnum } from "../Table";
import Selector from "../../inputs/selector";
import DatePicker from "../../inputs/datePicker";

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

const TableContainerHeader: React.FunctionComponent<
  ITableContainerHeaderProps
> = (props: ITableContainerHeaderProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const withOptions = React.useMemo(() => {
    return props.searchInputProps || props.buttonsProps?.length > 0;
  }, [props.searchInputProps, props.buttonsProps]);

  return (
    <div className={styles.tableContainerHeader}>
      <div className={styles.titleAndOptionsContainer}>
        <div className={styles.titleAndShowIndicator}>
          <h2 className={styles.tableTitle}>{props.title}</h2>
          <ShowHideIndicator
            handleTrigger={props.handleTriggerShowTable}
            isShown={props.tableIsShown}
          />
        </div>

        {withOptions && (
          <div className={styles.optionsContainer}>
            {props.searchInputProps && (
              <SearchInput {...props.searchInputProps} />
            )}
            {props.buttonsProps?.map((buttonProps, buttonPropsIndex) => {
              return <Button key={buttonPropsIndex} {...buttonProps} />;
            })}
          </div>
        )}
      </div>

      {props.filtersInputsProps?.length && props.tableIsShown && (
        <div className={styles.filtersContainer}>
          {props.fitlersText && (
            <span className={styles.filtersText}>{props.fitlersText}</span>
          )}
          {props.filtersInputsProps?.map((filter, filterIndex) => {
            if (filter.filterType === TableFilterTypeEnum.DatePicker) {
              return (
                <DatePicker
                  key={filterIndex}
                  {...filter.datePickerInputProps}
                />
              );
            }
            if (filter.filterType === TableFilterTypeEnum.Selector) {
              return (
                <Selector key={filterIndex} {...filter.selectorInputProps} />
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(TableContainerHeader);
