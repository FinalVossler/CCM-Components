import React from "react";
import { ITheme } from "ccmtypes";
import "react-datepicker/dist/react-datepicker.css";
interface IDatePickerProps {
    label?: string;
    placeholder: string;
    theme?: ITheme;
    showTimeSelect?: boolean;
    value?: Date;
    onChange?: (date: Date) => void;
    minWidth?: string;
    error?: string;
}
declare const _default: React.MemoExoticComponent<(props: IDatePickerProps) => React.JSX.Element>;
export default _default;
