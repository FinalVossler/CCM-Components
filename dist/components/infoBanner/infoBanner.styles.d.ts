import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"infoBannerContainer" | "infoBannerContainerSuccess" | "infoBannerContainerInfo" | "infoBannerContainerError" | "infoBannerContainerWarning" | "titleAndDescriptionContainer" | "title" | "description">;
export default useStyles;
