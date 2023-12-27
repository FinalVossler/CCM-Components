import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./sideBar.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";
import SideBarIcon from "../icons/SideBarIcon";
import IIconProps from "../icons/IIconProps";

export interface ISideBarOption {
  icon: React.FunctionComponent<IIconProps>;
  title: string;
  link?: string;
  onClick?: () => void;
}

export interface ISideBarSection {
  title: string;
  options: ISideBarOption[];
}

export interface ISideBarProps {
  theme?: ITheme;
  sideBarSections: ISideBarSection[];
}

const SideBar: React.FunctionComponent<ISideBarProps> = (
  props: ISideBarProps
) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleTriggerIsOpen = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      {isOpen && <div className={styles.layer}></div>}

      <div
        className={
          styles.sideBarContainer +
          (!isOpen ? " " + styles.sideBarClosedContainer : "")
        }
      >
        <div
          className={styles.sideBarTriggerIconContainer}
          onClick={handleTriggerIsOpen}
        >
          <SideBarIcon />
        </div>
        <div className={styles.sideBarLine}></div>
        {props.sideBarSections.map((section, sectionIndex) => {
          return (
            <div key={sectionIndex} className={styles.sideBarSectionContainer}>
              {section.title && (
                <h2 className={styles.sideBarSectionTitle}>{section.title}</h2>
              )}

              {section.options.map((option, optionIndex) => {
                return (
                  <div
                    key={optionIndex}
                    className={styles.sideBarOptionContainer}
                    {...(option.onClick ? { onClick: option.onClick } : {})}
                  >
                    <div className={styles.sideBarOption}>
                      <option.icon className={styles.sideBarIcon} />
                      <span className={styles.sideBarOptionTitle}>
                        {option.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default React.memo(withThemeProvider(SideBar, theme));
