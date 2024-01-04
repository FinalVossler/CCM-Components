import React, { ReactNode } from "react";
import { ITheme, theme } from "ccmtypes";
import { useTheme } from "react-jss";

import useStyles from "./section.styles";
import withThemeProvider from "../../hoc/withThemeProvider";
import ShowHideIndicator from "../showHideIndicator";

export interface ISectionProps extends React.PropsWithChildren {
  title: string;
  theme?: ITheme;
  children: ReactNode;
}

const Section: React.FunctionComponent<ISectionProps> = (
  props: ISectionProps
) => {
  const [sectionIsShown, setSectionIsShown] = React.useState<boolean>(true);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleTriggerShowSection = () => setSectionIsShown(!sectionIsShown);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>{props.title}</h2>

        <ShowHideIndicator
          handleTrigger={handleTriggerShowSection}
          isShown={sectionIsShown}
        />
      </div>

      {sectionIsShown && (
        <div className={styles.sectionContent}>
          {sectionIsShown && props.children}
        </div>
      )}
    </div>
  );
};

export default React.memo(withThemeProvider(Section, theme));
