import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"yesOrNoContainer" | "label" | "checkboxesContainer" | "checkboxContainer" | "checkbox" | "dot" | "yesOrNoLabel">;
export default useStyles;
