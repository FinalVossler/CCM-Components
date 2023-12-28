import React from "react";
import { ITheme, theme } from "ccmtypes";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTheme } from "react-jss";

import useStyles from "./datePicker.styles";
import withThemeProvider from "../../../hoc/withThemeProvider";
import DateIcon from "../../icons/DateIcon";
import ClearIcon from "../../icons/ClearIcon";

interface IDatePickerProps {
  label?: string;
  placeholder: string;
  theme?: ITheme;
  showTimeSelect?: boolean;
  value?: Date;
  onChange?: (date: Date) => void;
  minWidth?: number;
  error?: string;
}

const DatePicker: React.FunctionComponent<IDatePickerProps> = (
  props: IDatePickerProps
) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    props.value || new Date()
  );

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleOnChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      if (props.onChange) {
        props.onChange(date);
      }
    }
  };

  const handleReset = () => setSelectedDate(null);

  return (
    <div
      className={
        styles.datePickerContainer +
        (props.error ? " " + styles.erroredDatePicker : "")
      }
      style={{
        minWidth: props.minWidth || 270,
        ...(!props.label ? { padding: 0 } : {}),
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

      <ReactDatePicker
        selected={selectedDate}
        onChange={handleOnChange}
        className={styles.datePickerContainer}
        dateFormat={"dd/MM/yyyy" + (props.showTimeSelect ? " hh:mm aa" : "")}
        placeholderText={props.placeholder}
        showTimeSelect={Boolean(props.showTimeSelect)}
        {...(props.showTimeSelect ? { timeFormat: "HH mm" } : {})}
      />

      <span className={props.label ? styles.error : styles.errorWhenNoLabel}>
        {props.error}
      </span>
    </div>
  );
};

export default React.memo(withThemeProvider(DatePicker, theme));
