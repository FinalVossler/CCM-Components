import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"datePickerContainer" | "datePickerContainerDisabled" | "erroredDatePicker" | "label" | "dateIcon" | "clearIcon" | "iconWhenNoLabel" | "error" | "errorWhenNoLabel" | "pickersContainer">;
export default useStyles;
