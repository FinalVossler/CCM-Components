import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  datePickerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.backgroundSurface,
    padding: 12,
    flex: 1,
    borderRadius: 5,
    fontFamily: "Open Sans Regular",
    boxSizing: "border-box",

    position: "relative",
    "& .react-datepicker": {
      boxShadow: "1px 1px 10px 1px black",
      backgroundColor: theme.backgroundSurface,
    },
    "& .react-datepicker-wrapper": {
      width: "100%",
    },
    "& .react-datepicker__month-container": {
      backgroundColor: theme.backgroundSurface,
      borderRadius: 3.5,
    },
    "& .react-datepicker__header": {
      backgroundColor: theme.backgroundSurface,
    },
    "& .react-datepicker__time-list": {
      backgroundColor: theme.backgroundSurface,
    },
    "& .react-datepicker__current-month": {
      color: theme.textMajor,
    },
    "& .react-datepicker__day-name": {
      color: theme.textMajor,
    },
    "& .react-datepicker-time__header": {
      color: theme.textMajor,
    },
    "& .react-datepicker__day": {
      color: theme.textMajor,
    },

    "& .react-datepicker__day:hover": {
      color: theme.textReverse,
    },

    "& .react-datepicker__time-list-item": {
      color: theme.textMajor,
    },
    "& .react-datepicker__time-list-item:hover": {
      color: theme.textReverse,
    },
    "& input": {
      backgroundColor: theme.backgroundSurface,
      color: theme.textMajor,
      width: "100%",
      height: 32,
      borderWidth: 1,
      boxSizing: "border-box",
      border: "1px solid " + theme.borderDefaultMinor,
      borderRadius: 4,
      paddingLeft: 8,
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 400,
      "&:focus": {
        outline: "none",
        border: "1px solid " + theme.borderDefault,
      },
    },
  },
  erroredDatePicker: {
    "& input": {
      borderColor: theme.textDanger,
      color: theme.textDanger,

      borderWidth: 2,
      "&:focus": {
        borderWidth: 2,
        borderColor: theme.textDanger,
      },
    },
    "& $label": {
      color: theme.textDanger,
    },
    "& path": {
      fill: theme.textDanger + "!important",
    },
    "& div": {
      borderColor: theme.textDanger,
    },
  },
  label: {
    marginBottom: 4,
    color: theme.textMajor,
    fontSize: 16,
    fontFamily: "Open Sans Regular",
    fontWeight: 600,
    fontStyle: "normal",
  },
  dateIcon: {
    position: "absolute",
    right: 20,
    top: 45,
    zIndex: 1,
  },
  clearIcon: {
    cursor: "pointer",

    position: "absolute",
    right: 45,
    top: 45,
    zIndex: 1,
    fontSize: 30,
  },
  iconWhenNoLabel: {
    top: 8.5,
  },
  error: {
    color: theme.textDanger,
    fontSize: 16,
    paddingLeft: 3,
    position: "absolute",
    right: 12,
    top: 12,
  },
  errorWhenNoLabel: {
    extend: "error",
    top: 4,
    right: 70,
  },
}));

export default useStyles;
