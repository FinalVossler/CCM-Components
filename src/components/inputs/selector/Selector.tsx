import React from "react";
import { ITheme, theme } from "ccmtypes";
import Select from "react-select";
import { useTheme } from "react-jss";
import makeAnimated from "react-select/animated";

import useStyles from "./selector.styles";
import withThemeProvider from "../../../hoc/withThemeProvider";

export interface ISelectorOption {
  value: string;
  label: string;
}

export interface ISelectorProps {
  label?: string;
  placeholder: string;
  options: ISelectorOption[];
  theme?: ITheme;
  isMulti?: boolean;
  onChange?: (newValue: ISelectorOption[] | ISelectorOption) => void;
  minWidth?: string;
  maxWidth?: string;
  error?: string;
  value?: ISelectorOption[] | ISelectorOption;
}

const animatedComponents = makeAnimated();

const Selector: React.FunctionComponent<ISelectorProps> = (
  props: ISelectorProps
) => {
  const [value, setValue] = React.useState<ISelectorOption[] | ISelectorOption>(
    []
  );

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleOnChange = (newValue: ISelectorOption[] | ISelectorOption) => {
    setValue(newValue);

    if (!props.isMulti) {
    }
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <div
      className={
        styles.selectorContainer +
        (props.error ? " " + styles.erroredSelectorContainer : "")
      }
      style={{
        minWidth: props.minWidth || 270,
        ...(props.maxWidth ? { maxWidth: props.maxWidth } : {}),

        ...(!props.label ? { padding: 0 } : {}),
      }}
    >
      {props.label && <label className={styles.label}>{props.label}</label>}

      <Select
        components={animatedComponents}
        isMulti={Boolean(props.isMulti)}
        options={props.options}
        placeholder={props.placeholder}
        onChange={handleOnChange}
        value={value}
        styles={{
          container: (styles) => ({ ...styles, width: "100%" }),
          valueContainer: (styles) => ({
            ...styles,
            padding: 0,
            margin: 0,
            bottom: 3,
            position: "relative",
          }),
          placeholder: (styles) => ({
            ...styles,
            bottom: 1,
            position: "relative",
          }),
          indicatorsContainer: (styles) => ({
            ...styles,
            position: "relative",
            bottom: 3,
          }),
          control: (styles, { isFocused }) => {
            return {
              ...styles,
              outline: "none",
              boxShadow: "none",
              backgroundColor: theme.backgroundSurface,
              color: theme.textMajor,
              width: "100%",
              height: 32,
              minHeight: "initial",
              borderWidth: 1,
              boxSizing: "border-box",
              border:
                "1px solid " +
                (isFocused ? theme.borderDefault : theme.borderDefaultMinor),
              borderRadius: 4,
              paddingLeft: 8,
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 400,
            };
          },
          input: (styles) => ({
            ...styles,
            color: props.error ? theme.textDanger : theme.textMajor,
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: theme.backgroundSurface,
          }),
          singleValue: (styles) => ({
            ...styles,
            color: props.error ? theme.textDanger : theme.textMajor,
            position: "relative",
            bottom: 1.5,
          }),
          multiValue: (styles) => ({
            ...styles,
            position: "relative",
            bottom: props.label ? 0 : props.error ? 1.1 : 0,
          }),

          option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            color: isSelected
              ? theme.textSuccess
              : isFocused
              ? theme.textReverse
              : theme.textMajor,
            backgroundColor: isFocused
              ? theme.textMajor
              : theme.backgroundSurface,
          }),
          menuList: (styles) => ({
            ...styles,
            boxShadow: "1px 1px 10px 1px black",
            border: "1px solid " + theme.borderDefaultMinor,
            borderRadius: 5,
          }),
        }}
      />

      <span
        className={
          props.label
            ? styles.error
            : props.isMulti && (value as ISelectorOption[]).length > 0
            ? styles.errorWhenNoLabelButMultiAndSomethingSelected
            : styles.errorWhenNoLabel
        }
      >
        {props.error}
      </span>
    </div>
  );
};

export default React.memo(withThemeProvider(Selector, theme));
