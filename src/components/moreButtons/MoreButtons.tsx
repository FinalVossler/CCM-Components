import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./moreButtons.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";
import Button from "../button";
import IIconProps from "../icons/IIconProps";
import { ButtonTypeEnum } from "../button/Button";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface IMoreButtonsButtons {
  icon: React.FunctionComponent<IIconProps>;
  text: string;
  onClick?: () => void;
}

export interface IMoreButtonProps {
  theme?: ITheme;
  buttons: IMoreButtonsButtons[];
  style?: React.CSSProperties;
}

const MoreButton: React.FunctionComponent<IMoreButtonProps> = (
  props: IMoreButtonProps
) => {
  const [buttonsShowing, setButtonsShowing] = React.useState<boolean>(false);
  const [popupStyles, setPopupStyles] = React.useState<string>("");

  const popupRef: React.MutableRefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null);
  const dotsRef: React.MutableRefObject<HTMLSpanElement> =
    React.useRef<HTMLSpanElement>(null);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });
  useOnClickOutside(popupRef, () => setButtonsShowing(false));

  React.useLayoutEffect(() => {
    if (buttonsShowing && dotsRef.current) {
      const rec = dotsRef.current.getBoundingClientRect();

      console.log("rec", rec);
      console.log("dotsRef", dotsRef.current);
      if (
        rec.left > window.innerWidth / 2 &&
        rec.top > window.innerHeight / 2
      ) {
        setPopupStyles(styles.popupContainerTopLeft);
      }
      if (
        rec.left > window.innerWidth / 2 &&
        rec.top < window.innerHeight / 2
      ) {
        setPopupStyles(styles.popupContainerBottomLeft);
      }
      if (
        rec.left < window.innerWidth / 2 &&
        rec.top > window.innerHeight / 2
      ) {
        setPopupStyles(styles.popupContainerTopRight);
      }
      if (
        rec.left < window.innerWidth / 2 &&
        rec.top < window.innerHeight / 2
      ) {
        setPopupStyles(styles.popupContainerBottomRight);
      }
    }
  }, [props.buttons, buttonsShowing]);

  const handleShowButtons = () => {
    setButtonsShowing(true);
  };

  return (
    <div
      className={styles.moreButtonsContainer}
      onClick={handleShowButtons}
      {...(props.style ? { style: props.style } : {})}
    >
      <span ref={dotsRef} className={styles.dots}>
        ...
      </span>

      {buttonsShowing && props.buttons.length > 0 && (
        <div
          ref={popupRef}
          className={styles.popupContainer + (" " + popupStyles)}
        >
          {props.buttons.map((button, buttonIndex) => {
            return (
              <Button
                key={buttonIndex}
                prefixIcon={(props) => <button.icon {...props} />}
                label={button.text}
                buttonType={ButtonTypeEnum.Default}
                withoutBorder
              ></Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(withThemeProvider(MoreButton, theme));
