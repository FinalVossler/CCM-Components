import { ITheme } from "ccmtypes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: ITheme) => ({
  dropImagesZone: {
    width: "100%!important",
  },
  froalaEditorContainer: {
    display: "flex",
    width: "100%",

    "& .fr-box": {
      width: "100%!important",
    },

    "& .fr-box.fr-document .fr-wrapper .fr-element": {
      width: "100%!important",
      margin: "0px!important",
      paddingTop: "10px!important",
      paddingRight: "20px!important",
      paddingLeft: "20px!important",
      minHeight: "initial!important",
    },
    "& .fr-view": {
      width: "100%!important",
      margin: "0px!important",
      paddingTop: "10px!important",
      paddingRight: "20px!important",
      paddingLeft: "20px!important",
      minHeight: "initial!important",
    },
    "& .fr-wrapper": {
      padding: "0px!important",
    },
    "& #isPasted td": {
      border: "1px solid black!important",
      padding: "3px!important",
    },
    "& #fr-logo": {
      display: "none",
    },
    "& .fr-toolbar": {
      borderRadius: "0px!important",
      backgroundColor: "#f8f8f8!important",
    },
    "& .fr-toolbar .fr-btn-grp": {
      display: "inline-block",
      margin: "0px 17px 0px 12px",
      borderRight: "1px solid #c3c3c3",
      marginRight: 0,
      marginLeft: 0,
      paddingRight: 10,
      paddingLeft: 2,
      marginTop: 5,
      marginBottom: 5,
    },
    "& .fr-btn": {
      height: "25px!important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marigin: "0px!important",
      padding: "0px 2px!important",
      "& svg": {
        width: "18px!important",
      },
    },

    "& .fr-svg": {
      margin: "0px!important",
    },
    "& .fr-toolbar .fr-command.fr-btn.fr-dropdown:after": {
      top: "8px!important",
    },
    "& .fr-toolbar .fr-command.fr-btn img": {
      width: "17px!important",
    },
    "& .fr-dropdown": {
      paddingRight: "20px!important",
    },
    "& .fr-second-toolbar": {
      borderRadius: "0px!important",
      display: "none!important",
    },
    "& .fr-line-breaker": {
      display: "none",
    },
    "& hr": {
      height: "2px!important",
      width: "100%!important",
      marginRight: "0px!important",
      marginLeft: "0px!important",
    },
  },
  froalaEditorError: {
    border: "2px solid " + theme.textDanger,
  },
}));

export default useStyles;
