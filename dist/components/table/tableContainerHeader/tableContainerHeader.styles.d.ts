import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"tableContainerHeader" | "titleAndOptionsContainer" | "titleAndShowIndicator" | "tableTitle" | "optionsContainer" | "filtersText" | "filtersContainer">;
export default useStyles;
