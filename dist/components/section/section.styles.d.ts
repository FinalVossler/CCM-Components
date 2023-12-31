import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"sectionContainer" | "title" | "header" | "sectionContent">;
export default useStyles;
