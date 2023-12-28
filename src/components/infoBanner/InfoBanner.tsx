import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./infoBanner.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";
import SuccessIcon from "../icons/SuccessIcon";

export enum InfoBannerTypeEnum {
  Success = "Success",
  Info = "Info",
  Error = "Error",
  Warning = "Warning",
}

export interface IInfoBannerProps {
  title: string;
  description: string;
  theme?: ITheme;
  infoBannerType: InfoBannerTypeEnum;
}

const InfoBanner: React.FunctionComponent<IInfoBannerProps> = (
  props: IInfoBannerProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <div
      className={
        {
          [InfoBannerTypeEnum.Info]: styles.infoBannerContainerInfo,
          [InfoBannerTypeEnum.Success]: styles.infoBannerContainerSuccess,
          [InfoBannerTypeEnum.Warning]: styles.infoBannerContainerWarning,
          [InfoBannerTypeEnum.Error]: styles.infoBannerContainerError,
        }[props.infoBannerType] || styles.infoBannerContainer
      }
    >
      <SuccessIcon />
      <div className={styles.titleAndDescriptionContainer}>
        <span className={styles.title}>{props.title}</span>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default React.memo(withThemeProvider(InfoBanner, theme));
