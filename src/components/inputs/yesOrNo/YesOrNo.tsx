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
}

const YesOrNo: React.FunctionComponent<IYesOrNoProps> = (
  props: IYesOrNoProps
) => {
  const yesRef = React.useRef<HTMLInputElement>(null);
  const noRef = React.useRef<HTMLInputElement>(null);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleYesClick = () => {
    console.log("yes click", yesRef.current.checked);
    yesRef.current.checked = !yesRef.current.checked;

    if (yesRef.current.checked) {
      noRef.current.checked = false;
    }
  };

  const handleNoClick = () => {
    noRef.current.checked = !noRef.current.checked;

    if (noRef.current.checked) {
      yesRef.current.checked = false;
    }
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.yesOrNoContainer}>
      <label className={styles.label}>{props.label}</label>

      <div className={styles.checkboxesContainer}>
        <div className={styles.checkboxContainer} onClick={handleYesClick}>
          <input
            onClick={handleCheckboxClick}
            type="checkbox"
            className={styles.checkbox}
            ref={yesRef}
          />
          <span className={styles.dot}></span>
          <label className={styles.yesOrNoLabel}>
            {props.yesLabel || "Yes"}
          </label>
        </div>

        <div className={styles.checkboxContainer} onClick={handleNoClick}>
          <input
            onClick={handleCheckboxClick}
            type="checkbox"
            className={styles.checkbox}
            ref={noRef}
          />
          <span className={styles.dot}></span>
          <label className={styles.yesOrNoLabel}>{props.noLabel || "No"}</label>
        </div>
      </div>
    </div>
  );
};

export default React.memo(withThemeProvider(YesOrNo, theme));
