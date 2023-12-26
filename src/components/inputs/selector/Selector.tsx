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

interface ISelectorProps {
  label: string;
  placeholder: string;
  options: ISelectorOption[];
  theme?: ITheme;
  isMulti?: boolean;
  onChange?: (newValue: ISelectorOption) => void;
}

const animatedComponents = makeAnimated();

const Selector: React.FunctionComponent<ISelectorProps> = (
  props: ISelectorProps
) => {
  const [menuIsOpen, setMenuOpen] = React.useState<boolean>(false);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleOnChange = (newValue: ISelectorOption) => {
    if (!props.isMulti) {
      setMenuOpen(false);
    }
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.selectorContainer}>
      <label className={styles.label}>{props.label}</label>

      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={Boolean(props.isMulti)}
        options={props.options}
        onChange={handleOnChange}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        menuIsOpen={menuIsOpen}
        styles={{
          container: (styles) => ({ ...styles, width: "100%" }),
          control: (styles, { isFocused }) => {
            return {
              ...styles,
              outline: "none",
              boxShadow: "none",
              backgroundColor: theme.backgroundSurface,
              color: theme.textMajor,
              width: "100%",
              height: 32,
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
            color: theme.textMajor,
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: theme.backgroundSurface,
          }),
          singleValue: (styles) => ({
            ...styles,
            color: theme.textMajor,
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
    </div>
  );
};

export default React.memo(withThemeProvider(Selector, theme));
