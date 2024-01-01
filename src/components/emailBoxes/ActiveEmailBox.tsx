import { ITheme, theme } from "ccmtypes";
import { EmailBoxViewTypeEnum, IEmailBox } from "./EmailBoxes";
import { useTheme } from "react-jss";
import useStyles from "./emailBoxes.styles";
import { EnlargeIcon, ReduceIcon } from "./Icons";
import { CrossIcon } from "../icons";
import React from "react";
import withThemeProvider from "../../hoc/withThemeProvider";

interface IActiveEmailBoxProps extends React.PropsWithChildren {
  box: IEmailBox;
  theme?: ITheme;
  onChangeViewType: (viewType: EmailBoxViewTypeEnum) => void;
  onRemoveBox: () => void;
}

const ActiveEmailBox: React.FunctionComponent<IActiveEmailBoxProps> = (
  props: IActiveEmailBoxProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });
  const containerRef: React.MutableRefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null);

  const handleChangeViewType = (viewType: EmailBoxViewTypeEnum) => () => {
    if (viewType === EmailBoxViewTypeEnum.Active && containerRef.current) {
      containerRef.current.scrollIntoView();
    }
    props.onChangeViewType(viewType);
  };

  // We need to scroll in this view when the email gets active
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView();
    }
  }, [containerRef.current]);

  return (
    <div
      className={
        props.box.viewType === EmailBoxViewTypeEnum.FullScreen
          ? styles.activeEmailBoxFullScreenContainer
          : styles.activeEmailBoxContainer
      }
      ref={containerRef}
    >
      <div className={styles.activeEmailBoxTitleAndIcons}>
        <span className={styles.emailBoxTitle}>{props.box.title}</span>
        <div className={styles.emailBoxIconsContainer}>
          <ReduceIcon
            className={styles.emailBoxIcon}
            style={{ top: 5 }}
            onClick={handleChangeViewType(EmailBoxViewTypeEnum.Reduced)}
          />
          <EnlargeIcon
            className={styles.emailBoxIcon}
            onClick={handleChangeViewType(
              props.box.viewType === EmailBoxViewTypeEnum.Active
                ? EmailBoxViewTypeEnum.FullScreen
                : EmailBoxViewTypeEnum.Active
            )}
          />
          <CrossIcon
            className={styles.emailBoxIcon}
            onClick={props.onRemoveBox}
          />
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default React.memo(withThemeProvider(ActiveEmailBox, theme));
