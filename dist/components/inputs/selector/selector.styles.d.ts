import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"selectorContainer" | "erroredSelectorContainer" | "label" | "error" | "errorWhenNoLabel" | "errorWhenNoLabelButMultiAndSomethingSelected">;
export default useStyles;
