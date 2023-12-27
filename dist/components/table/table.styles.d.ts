import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"tableContainer" | "tableHeader" | "tableHeaderRow" | "tableHeaderColumn" | "tableHeaderColumnTitle" | "tableHeaderLastColumnTitle" | "tableBody" | "tableRow" | "tableLastRow" | "tableSelectedRow" | "tableColumn" | "tableSearchColumn" | "checkbox">;
export default useStyles;
