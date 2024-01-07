import React from "react";
import { ITheme, theme } from "ccmtypes";
import { Tooltip } from "react-tooltip";

import useStyles from "./moreButtons.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";
import Button from "../button";
import IIconProps from "../icons/IIconProps";
import { ButtonTypeEnum } from "../button/Button";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import VerticalDotsIcon from "../icons/VerticalDotsIcon";

export enum MoreButtonsDotsTypeEnum {
  Vertical = "Vertical",
  Horizontal = "Horizontal",
}

interface IMoreButtonsButton {
  icon: React.FunctionComponent<IIconProps>;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IMoreButtonProps {
  theme?: ITheme;
  buttons: IMoreButtonsButton[];
  style?: React.CSSProperties;
  type?: MoreButtonsDotsTypeEnum;
  tooltipMessage?: string;
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

  const handleClickButton =
    (button: IMoreButtonsButton) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setButtonsShowing(false);
      if (button.onClick) {
        button.onClick(e);
      }
    };

  return (
    <div
      className={styles.moreButtonsContainer}
      onClick={handleShowButtons}
      {...(props.tooltipMessage
        ? {
            "data-tooltip-id": props.tooltipMessage.replace(/[\s, ']/g, ""),
            "data-tooltip-content": props.tooltipMessage,
          }
        : {})}
      {...(props.style ? { style: props.style } : {})}
    >
      {(!props.type || props.type === MoreButtonsDotsTypeEnum.Horizontal) && (
        <span ref={dotsRef} className={styles.dots}>
          {"...".trim()}
        </span>
      )}

      {props.type === MoreButtonsDotsTypeEnum.Vertical && (
        <span ref={dotsRef} className={styles.verticalButtonsSpan}>
          <VerticalDotsIcon color={theme.textPrimary} />
        </span>
      )}

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
                onClick={handleClickButton(button)}
              ></Button>
            );
          })}
        </div>
      )}

      {props.tooltipMessage && (
        <Tooltip id={props.tooltipMessage.replace(/[\s, ']/g, "")} />
      )}
    </div>
  );
};

export default React.memo(withThemeProvider(MoreButton, theme));
