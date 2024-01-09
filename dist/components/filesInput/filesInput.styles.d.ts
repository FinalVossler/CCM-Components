import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"filesInputContainer" | "filesContainer" | "singleFileContainer" | "fileName" | "crossIcon">;
export default useStyles;
