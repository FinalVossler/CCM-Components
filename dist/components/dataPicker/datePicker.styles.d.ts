import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"datePickerContainer" | "label" | "dateIcon" | "clearIcon">;
export default useStyles;
