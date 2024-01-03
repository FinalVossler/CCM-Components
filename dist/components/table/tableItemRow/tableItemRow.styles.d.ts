import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"tableRow" | "tableLastRow" | "tableSelectedRow" | "checkbox">;
export default useStyles;
