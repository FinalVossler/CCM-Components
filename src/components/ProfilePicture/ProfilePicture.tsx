import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./profile.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";

export enum ButtonTypeEnum {
  Confirm = "Confirm",
  Cancel = "Cancel",
  Default = "Default",
}

export interface IProfilePictureAction {
  actionTitle: string;
  onClick: () => void;
}

export interface IProfilePictureProps {
  theme?: ITheme;
  firstName: string;
  lastName: string;
  withFullFirstNameAndLast?: boolean;
  action?: IProfilePictureAction;
}

const ProfilePicture: React.FunctionComponent<IProfilePictureProps> = (
  props: IProfilePictureProps
) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  return (
    <div className={styles.profilePictureContainer}>
      <div className={styles.picture}>
        {props.firstName.at(0).toUpperCase() +
          props.lastName.at(0).toUpperCase()}
      </div>

      {(props.action || props.withFullFirstNameAndLast) && (
        <div className={styles.content}>
          {props.withFullFirstNameAndLast && (
            <span className={styles.firstAndLastName}>
              {props.firstName + " " + props.lastName}
            </span>
          )}
          {props.action && (
            <span className={styles.action} onClick={props.action.onClick}>
              {props.action.actionTitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(withThemeProvider(ProfilePicture, theme));
