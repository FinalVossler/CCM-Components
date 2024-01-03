import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"containedTableContainer" | "tableContainer" | "tableHeader" | "tableHeaderRow" | "tableHeaderColumn" | "tableHeaderColumnTitle" | "tableHeaderLastColumnTitle" | "tableBody" | "tableSearchRow" | "tableColumn" | "tableSearchColumn" | "checkbox">;
export default useStyles;
