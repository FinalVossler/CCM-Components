import React from "react";
import { ITheme, theme } from "ccmtypes";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTheme } from "react-jss";

import useStyles from "./datePicker.styles";
import withThemeProvider from "../../hoc/withThemeProvider";
import DateIcon from "../icons/DateIcon";
import ClearIcon from "../icons/ClearIcon";

interface IDatePickerProps {
  label: string;
  placeholder: string;
  theme?: ITheme;
  showTimeSelect?: boolean;
}

const DatePicker: React.FunctionComponent<IDatePickerProps> = (
  props: IDatePickerProps
) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleReactDatePickerChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleReset = () => setSelectedDate(null);

  return (
    <div className={styles.datePickerContainer}>
      <label className={styles.label}>{props.label}</label>

      <DateIcon className={styles.dateIcon} />
      <ClearIcon className={styles.clearIcon} onClick={handleReset} />

      <ReactDatePicker
        selected={selectedDate}
        onChange={handleReactDatePickerChange}
        className={styles.datePickerContainer}
        dateFormat={"dd/MM/yyyy" + (props.showTimeSelect ? " hh:mm aa" : "")}
        placeholderText={props.placeholder}
        showTimeSelect={Boolean(props.showTimeSelect)}
        {...(props.showTimeSelect ? { timeFormat: "HH mm" } : {})}
      />
    </div>
  );
};

export default React.memo(withThemeProvider(DatePicker, theme));
