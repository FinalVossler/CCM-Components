import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"tabsContainer" | "tabOption" | "activeOption" | "underline">;
export default useStyles;
