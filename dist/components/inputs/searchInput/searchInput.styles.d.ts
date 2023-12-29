import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"searchInputContainer" | "searchIcon">;
export default useStyles;
