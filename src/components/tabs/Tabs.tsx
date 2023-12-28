import React, { useRef, useLayoutEffect, LegacyRef } from "react";
import { ITheme, theme } from "ccmtypes";
import useStyles from "./tabs.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export interface ITabOption {
  title: string;
  id?: string;
}

export interface ITabsProps {
  options: ITabOption[];
  theme?: ITheme;
  onOptionClick?: (option: ITabOption) => void;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props: ITabsProps) => {
  const [activeOptionIndex, setActiveOptionIndex] = React.useState<number>(0);
  const [underlineWidth, setUnderlineWidth] = React.useState<number>(0);

  const optionRefs: React.MutableRefObject<
    (React.MutableRefObject<HTMLDivElement> | null)[]
  > = useRef(props.options.map(() => React.createRef()));

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  useLayoutEffect(() => {
    if (optionRefs.current[activeOptionIndex]) {
      setUnderlineWidth(
        optionRefs.current[activeOptionIndex].current.offsetWidth
      );
    }
  }, [activeOptionIndex, optionRefs]);

  const handleSelectOption = (optionIndex: number) => () => {
    setActiveOptionIndex(optionIndex);

    if (props.onOptionClick) {
      props.onOptionClick(props.options[optionIndex]);
    }
  };

  return (
    <div className={styles.tabsContainer}>
      {props.options.map((option, optionIndex) => (
        <div
          key={optionIndex}
          onClick={handleSelectOption(optionIndex)}
          ref={optionRefs.current[optionIndex]}
          className={`${styles.tabOption} ${
            activeOptionIndex === optionIndex ? styles.activeOption : ""
          }`}
        >
          {option.title}
        </div>
      ))}
      <div
        className={styles.underline}
        style={{
          width: underlineWidth,
          left: optionRefs.current[activeOptionIndex]?.current?.offsetLeft,
        }}
      ></div>
    </div>
  );
};

export default React.memo(withThemeProvider(Tabs, theme));
