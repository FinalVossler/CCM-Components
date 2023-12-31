import React from "react";
import { ITheme, theme } from "ccmtypes";
import Select from "react-select";
import { useTheme } from "react-jss";
import makeAnimated from "react-select/animated";

import useStyles from "./searchInput.styles";
import withThemeProvider from "../../../hoc/withThemeProvider";
import SearchIcon from "../../icons/SearchIcon";

export interface ISearchInputOption {
  value: string;
  label: string;
}

export interface ISearchInputProps {
  placeholder: string;
  options: ISearchInputOption[];
  theme?: ITheme;
  onSelect?: (option: ISearchInputOption) => void;
  isLoading?: boolean;
}

const animatedComponents = makeAnimated();

const SearchInput: React.FunctionComponent<ISearchInputProps> = (
  props: ISearchInputProps
) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleOnChange = (option) => {
    if (props.onSelect) {
      props.onSelect(option);
    }
  };
  return (
    <div className={styles.searchInputContainer}>
      <SearchIcon className={styles.searchIcon} />
      <Select
        isLoading={props.isLoading}
        components={animatedComponents}
        options={props.options}
        placeholder={props.placeholder}
        onChange={handleOnChange}
        value={selectedOption}
        styles={{
          container: (styles) => ({
            ...styles,
            width: "100%",
          }),
          control: (styles, { isFocused }) => {
            return {
              ...styles,
              outline: "none",
              boxShadow: "none",
              backgroundColor: "#353739",
              height: 40,

              color: theme.textMajor,
              width: "100%",
              borderWidth: 1,
              boxSizing: "border-box",
              border:
                "1px solid " +
                (isFocused ? theme.borderDefault : theme.borderDefaultMinor),
              borderRadius: 10,
              paddingLeft: 8,
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 400,
            };
          },
          input: (styles) => ({
            paddingLeft: 20,
            ...styles,
            color: "white",
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: "#353739",
          }),
          singleValue: (styles) => ({
            ...styles,
            paddingLeft: 20,
            color: "white",
          }),
          valueContainer: (styles) => ({
            ...styles,
            paddingLeft: 20,
            color: theme.textMajor,
          }),
          placeholder: (styles) => ({
            ...styles,
            paddingLeft: 20,
            color: theme.textMajor,
          }),
          indicatorsContainer: (styles) => ({ ...styles, display: "none" }),
          option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            color: isSelected
              ? theme.textSuccess
              : isFocused
              ? theme.textReverse
              : theme.textMajor,
            backgroundColor: isFocused ? theme.textMajor : "#353739",
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

export default React.memo(withThemeProvider(SearchInput, theme));
