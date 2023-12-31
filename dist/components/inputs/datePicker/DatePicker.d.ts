import React from "react";
import { ITheme } from "ccmtypes";
import "react-datepicker/dist/react-datepicker.css";
export interface IDatePickerProps {
    placeholder: string;
    label?: string;
    theme?: ITheme;
    showTimeSelect?: boolean;
    value?: Date;
    onChange?: (date: Date) => void;
    minWidth?: string;
    maxWidth?: string;
    error?: string;
}
declare const _default: React.MemoExoticComponent<(props: IDatePickerProps) => React.JSX.Element>;
export default _default;
