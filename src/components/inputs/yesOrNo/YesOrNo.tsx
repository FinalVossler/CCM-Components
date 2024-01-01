import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./yesOrNo.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../../hoc/withThemeProvider";

interface IYesOrNoProps {
  label: string;
  theme?: ITheme;
  yesLabel?: string;
  noLabel?: string;
  value?: boolean;
  minWidth?: string;
  maxWidth?: string;
  error?: string;
}

const YesOrNo: React.FunctionComponent<IYesOrNoProps> = (
  props: IYesOrNoProps
) => {
  const [isYesChecked, setIsYesChecked] = React.useState(props.value === true);
  const [isNoChecked, setIsNoChecked] = React.useState(props.value === false);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleYesClick = () => {
    const newValue: boolean = !isYesChecked;
    setIsYesChecked(newValue);
    if (newValue && isNoChecked) {
      setIsNoChecked(false);
    }
  };

  const handleNoClick = () => {
    const newValue: boolean = !isNoChecked;
    setIsNoChecked(newValue);
    if (newValue && isYesChecked) {
      setIsYesChecked(false);
    }
  };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={
        styles.yesOrNoContainer +
        (props.error ? " " + styles.erroredYesOrNotContainer : "")
      }
      style={{
        minWidth: props.minWidth || 170,
        ...(props.maxWidth ? { maxWidth: props.maxWidth } : {}),
      }}
    >
      <label className={styles.label}>{props.label}</label>

      <div className={styles.checkboxesContainer}>
        <div className={styles.checkboxContainer} onClick={handleYesClick}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isYesChecked}
            onChange={handleCheckboxClick}
          />
          <span className={styles.dot}></span>
          <label className={styles.yesOrNoLabel}>
            {props.yesLabel || "Yes"}
          </label>
        </div>

        <div className={styles.checkboxContainer} onClick={handleNoClick}>
          <input
            onChange={handleCheckboxClick}
            type="checkbox"
            className={styles.checkbox}
            checked={isNoChecked}
          />
          <span className={styles.dot}></span>
          <label className={styles.yesOrNoLabel}>{props.noLabel || "No"}</label>
        </div>
      </div>

      <span className={styles.error}>{props.error}</span>
    </div>
  );
};

export default React.memo(withThemeProvider(YesOrNo, theme));
