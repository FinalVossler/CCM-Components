import React, { CSSProperties } from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./textarea.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface ITextareProps {
  theme?: ITheme;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  label?: string;
}

const Textarea: React.FunctionComponent<ITextareProps> = (
  props: ITextareProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <div className={styles.textareaContainer}>
      {props.label && <span className={styles.label}>{props.label}</span>}
      <textarea
        className={styles.textarea}
        {...(props.textareaProps || {})}
      ></textarea>
    </div>
  );
};

export default React.memo(withThemeProvider(Textarea, theme));
