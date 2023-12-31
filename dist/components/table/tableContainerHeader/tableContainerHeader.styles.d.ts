import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"tableContainerHeader" | "titleAndOptionsContainer" | "titleAndShowIndicator" | "tableTitle" | "optionsContainer" | "filtersContainer">;
export default useStyles;
