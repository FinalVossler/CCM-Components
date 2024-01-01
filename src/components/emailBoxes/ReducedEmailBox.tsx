import { ITheme, theme } from "ccmtypes";
import { EmailBoxViewTypeEnum, IEmailBox } from "./EmailBoxes";
import { useTheme } from "react-jss";
import useStyles from "./emailBoxes.styles";
import { EnlargeIcon, ReduceIcon } from "./Icons";
import { CrossIcon } from "../icons";
import React from "react";
import withThemeProvider from "../../hoc/withThemeProvider";

interface IReducedEmailBoxProps {
  box: IEmailBox;
  theme?: ITheme;
  onChangeViewType: (viewType: EmailBoxViewTypeEnum) => void;
  onRemoveBox: () => void;
}

const ReducedEmailBox: React.FunctionComponent<IReducedEmailBoxProps> = (
  props: IReducedEmailBoxProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleChangeViewType =
    (viewType: EmailBoxViewTypeEnum) =>
    (e: React.MouseEvent<HTMLDivElement | HTMLOrSVGElement>) => {
      e.stopPropagation();
      props.onChangeViewType(viewType);
    };

  const handleRemoveBox = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();
    props.onRemoveBox();
  };

  return (
    <div
      className={styles.reducedEmailBoxContainer}
      onClick={handleChangeViewType(EmailBoxViewTypeEnum.Active)}
    >
      <span className={styles.emailBoxTitle}>{props.box.title}</span>
      <div className={styles.emailBoxIconsContainer}>
        <ReduceIcon
          className={styles.emailBoxIcon}
          style={{ top: 5 }}
          onClick={handleChangeViewType(EmailBoxViewTypeEnum.Reduced)}
        />
        <EnlargeIcon
          className={styles.emailBoxIcon}
          onClick={handleChangeViewType(EmailBoxViewTypeEnum.FullScreen)}
        />
        <CrossIcon className={styles.emailBoxIcon} onClick={handleRemoveBox} />
      </div>
    </div>
  );
};

export default React.memo(withThemeProvider(ReducedEmailBox, theme));
