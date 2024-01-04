import React from "react";
import { ITheme, theme } from "ccmtypes";
import Select from "react-select";
import { useTheme } from "react-jss";
import makeAnimated from "react-select/animated";

import useStyles from "./searchInput.styles";
import withThemeProvider from "../../../hoc/withThemeProvider";
import SearchIcon from "../../icons/SearchIcon";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export interface ISearchInputSearchOptions {
  label: string;
  checked: boolean;
  name: string;
}

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
  selectedSearchOptions?: ISearchInputSearchOptions[];
  searchOptions?: ISearchInputSearchOptions[];
  onSearchOptionsChanges?: (
    newSelectedSearchOptions: ISearchInputSearchOptions[]
  ) => void;
}

const animatedComponents = makeAnimated();

const SearchInput: React.FunctionComponent<ISearchInputProps> = (
  props: ISearchInputProps
) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedSearchOptions, setSelectedSearchOptions] = React.useState<
    ISearchInputSearchOptions[]
  >(props.selectedSearchOptions || []);
  const [searchOptionsShown, setSearchOptionsShown] =
    React.useState<boolean>(false);

  const searchInputContainerRef: React.MutableRefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null);
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  React.useEffect(() => {
    if (
      props.onSearchOptionsChanges &&
      JSON.stringify(props.selectedSearchOptions) !==
        JSON.stringify(selectedSearchOptions)
    ) {
      props.onSearchOptionsChanges(selectedSearchOptions);
    }
  }, [selectedSearchOptions]);

  React.useEffect(() => {
    if (
      props.selectedSearchOptions &&
      JSON.stringify(props.selectedSearchOptions) !==
        JSON.stringify(selectedSearchOptions)
    ) {
      setSelectedSearchOptions(props.selectedSearchOptions);
    }
  }, [props.selectedSearchOptions]);

  useOnClickOutside(searchInputContainerRef, () =>
    setSearchOptionsShown(false)
  );

  const handleOnChange = (option) => {
    if (props.onSelect) {
      props.onSelect(option);
    }
  };
  const handleSelectOrUnselectSearchOption = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setSelectedSearchOptions(
        selectedSearchOptions.filter((el) => el.name !== e.target.name)
      );
    } else {
      if (!selectedSearchOptions.find((el) => el.name === e.target.name)) {
        setSelectedSearchOptions([
          ...selectedSearchOptions,
          props.searchOptions.find((el) => el.name === e.target.name),
        ]);
      }
    }
  };
  const handleOnFocus = () => {
    setSearchOptionsShown(true);
  };

  return (
    <div className={styles.searchInputContainer} ref={searchInputContainerRef}>
      <SearchIcon className={styles.searchIcon} />
      <Select
        onFocus={handleOnFocus}
        isLoading={props.isLoading}
        components={animatedComponents}
        options={props.options}
        placeholder={props.placeholder}
        onChange={handleOnChange}
        value={selectedOption}
        styles={{
          control: (styles, { isFocused }) => {
            return {
              ...styles,
              outline: "none",
              boxShadow: "none",
              backgroundColor: "#353739",
              height: 32,
              minHeight: "initial",
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
            ...styles,

            paddingLeft: 13,
            color: "white",
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: "#353739",
            marginTop:
              props.searchOptions && props.searchOptions.length > 0 ? 50 : 0,
          }),
          singleValue: (styles) => ({
            ...styles,
            paddingLeft: 13,
            color: "white",
          }),
          valueContainer: (styles) => ({
            ...styles,
            padding: 0,
            margin: 0,
            position: "relative",
            paddingLeft: 13,
            color: theme.textMajor,
          }),

          container: (styles) => ({
            ...styles,
            width: "100%",
          }),
          placeholder: (styles) => ({
            ...styles,
            paddingLeft: 13,
            color: theme.textMajor,
            position: "relative",
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

      {props.searchOptions &&
        props.searchOptions.length > 0 &&
        searchOptionsShown && (
          <div className={styles.searchOptionsContainer}>
            {props.searchOptions.map((searchOption, optionIndex) => (
              <div className={styles.singleSearchOption} key={optionIndex}>
                <span>{searchOption.label}</span>
                <input
                  type="checkbox"
                  name={searchOption.name}
                  onChange={handleSelectOrUnselectSearchOption}
                  className={styles.searchOptionCheckbox}
                />
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default React.memo(withThemeProvider(SearchInput, theme));
