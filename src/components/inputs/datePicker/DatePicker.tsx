import React from "react";
import { ITheme, theme } from "ccmtypes";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTheme } from "react-jss";

import useStyles from "./datePicker.styles";
import withThemeProvider from "../../../hoc/withThemeProvider";
import DateIcon from "../../icons/DateIcon";
import ClearIcon from "../../icons/ClearIcon";

export interface IDatePickerProps {
  placeholder: string;
  label?: string;
  theme?: ITheme;
  showTimeSelect?: boolean;
  value?: Date | Date[];
  onChange?: (date: Date) => void;
  minWidth?: string;
  maxWidth?: string;
  error?: string;
  isARangePicker?: boolean;
}

const DatePicker: React.FunctionComponent<IDatePickerProps> = (
  props: IDatePickerProps
) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | Date[]>(
    props.value ||
      (props.isARangePicker ? [new Date(), new Date()] : new Date())
  );

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleOnChange = (whichDate: number) => (newDate: Date | null) => {
    if (newDate) {
      setSelectedDate(
        props.isARangePicker
          ? (selectedDate as Date[]).map((oldDate, i) =>
              i === whichDate ? newDate : oldDate
            )
          : newDate
      );
      if (props.onChange) {
        props.onChange(newDate);
      }
    }
  };

  const handleReset = () =>
    setSelectedDate(props.isARangePicker ? [null, null] : null);

  return (
    <div
      className={
        styles.datePickerContainer +
        (props.error ? " " + styles.erroredDatePicker : "")
      }
      style={{
        minWidth: props.minWidth || 270,
        ...(!props.label ? { padding: 0 } : {}),
        ...(props.maxWidth ? { maxWidth: props.maxWidth } : {}),
      }}
    >
      {props.label && <label className={styles.label}>{props.label}</label>}

      <DateIcon
        className={
          styles.dateIcon + (!props.label ? " " + styles.iconWhenNoLabel : "")
        }
      />
      <ClearIcon
        className={
          styles.clearIcon + (!props.label ? " " + styles.iconWhenNoLabel : "")
        }
        onClick={handleReset}
      />

      <div className={styles.pickersContainer}>
        <ReactDatePicker
          selected={
            Array.isArray(selectedDate) ? selectedDate[0] : selectedDate
          }
          onChange={handleOnChange(0)}
          className={styles.datePickerContainer}
          dateFormat={"dd/MM/yyyy" + (props.showTimeSelect ? " hh:mm aa" : "")}
          placeholderText={props.placeholder}
          showTimeSelect={Boolean(props.showTimeSelect)}
          {...(props.showTimeSelect ? { timeFormat: "HH mm" } : {})}
        />

        {props.isARangePicker && (
          <ReactDatePicker
            selected={
              Array.isArray(selectedDate) ? selectedDate[1] : selectedDate
            }
            onChange={handleOnChange(1)}
            className={styles.datePickerContainer}
            dateFormat={
              "dd/MM/yyyy" + (props.showTimeSelect ? " hh:mm aa" : "")
            }
            placeholderText={props.placeholder}
            showTimeSelect={Boolean(props.showTimeSelect)}
            {...(props.showTimeSelect ? { timeFormat: "HH mm" } : {})}
          />
        )}
      </div>

      <span className={props.label ? styles.error : styles.errorWhenNoLabel}>
        {props.error}
      </span>
    </div>
  );
};

export default React.memo(withThemeProvider(DatePicker, theme));
