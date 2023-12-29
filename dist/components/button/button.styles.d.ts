import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"defaultButton" | "confirmButton" | "cancelButton" | "withoutBorder">;
export default useStyles;
