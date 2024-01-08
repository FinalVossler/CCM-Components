import React from "react";
import { ITheme } from "ccmtypes";
import "react-datepicker/dist/react-datepicker.css";
export interface IDatePickerProps {
    placeholder: string;
    label?: string;
    theme?: ITheme;
    showTimeSelect?: boolean;
    value?: Date | Date[];
    onChange?: (date: Date | Date[]) => void;
    minWidth?: string;
    maxWidth?: string;
    error?: string;
    isARangePicker?: boolean;
    disabled?: boolean;
}
declare const _default: React.NamedExoticComponent<IDatePickerProps>;
export default _default;
