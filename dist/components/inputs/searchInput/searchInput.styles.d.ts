import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"searchInputContainer" | "searchIcon" | "searchOptionsContainer" | "singleSearchOption" | "searchOptionCheckbox">;
export default useStyles;
