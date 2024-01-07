import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./emailBoxes.styles";
import { useTheme } from "react-jss";
import ReducedEmailBox from "./ReducedEmailBox";
import withThemeProvider from "../../hoc/withThemeProvider";
import ActiveEmailBox from "./ActiveEmailBox";
import Button from "../button";
import { IButtonProps } from "../button/Button";
import { PlusIcon } from "../icons";

export enum EmailBoxViewTypeEnum {
  Reduced = "Reduced",
  Active = "Active",
  FullScreen = "FullScreen",
}
export interface IEmailBox {
  viewType: EmailBoxViewTypeEnum;
  title: string;
  id?: string;
}

export interface IEmailBoxesProps {
  theme?: ITheme;
  boxes: IEmailBox[];
  sendEmailButtonProps: IButtonProps;
  newEmailBoxTitle: string;
  EmailFormComponent: React.FunctionComponent<any>;
  onRemoveBox?: (box: IEmailBox) => void;
}

const EmailBoxes: React.FunctionComponent<IEmailBoxesProps> = (
  props: IEmailBoxesProps
) => {
  const [boxes, setBoxes] = React.useState<IEmailBox[]>([...props.boxes]);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  React.useEffect(() => {
    setBoxes([...props.boxes]);
  }, [props.boxes]);

  const handleChangeViewType =
    (boxIndex: number) => (viewType: EmailBoxViewTypeEnum) => {
      setBoxes(
        boxes.map((box, index) => ({
          ...box,
          viewType: boxIndex === index ? viewType : box.viewType,
        }))
      );
    };

  const handleRemoveBox = (boxIndex: number) => () => {
    const newBoxes = [...boxes];
    newBoxes.splice(boxIndex, 1);
    setBoxes(newBoxes);
    if (props.onRemoveBox) {
      props.onRemoveBox(boxes[boxIndex]);
    }
  };

  const handleAddNewBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.sendEmailButtonProps.onClick) {
      props.sendEmailButtonProps.onClick(e);
    } else {
      setBoxes([
        ...boxes,
        {
          title: props.newEmailBoxTitle,
          viewType: EmailBoxViewTypeEnum.Active,
        },
      ]);
    }
  };

  return (
    <div className={styles.emailBoxesContainer}>
      {boxes.map((box, boxIndex) => {
        if (box.viewType === EmailBoxViewTypeEnum.Reduced) {
          return (
            <ReducedEmailBox
              onRemoveBox={handleRemoveBox(boxIndex)}
              onChangeViewType={handleChangeViewType(boxIndex)}
              key={boxIndex}
              box={box}
              theme={theme}
            />
          );
        }
        if (
          box.viewType === EmailBoxViewTypeEnum.Active ||
          box.viewType === EmailBoxViewTypeEnum.FullScreen
        ) {
          return (
            <ActiveEmailBox
              onRemoveBox={handleRemoveBox(boxIndex)}
              onChangeViewType={handleChangeViewType(boxIndex)}
              key={boxIndex}
              box={box}
              theme={theme}
            >
              <props.EmailFormComponent />
            </ActiveEmailBox>
          );
        }
      })}
      <Button
        {...props.sendEmailButtonProps}
        style={{
          position: "relative",
          bottom: 5,
          fontSize: 20,
          marginRight: 25,
          marginLeft: 10,
        }}
        prefixIcon={(props) => <PlusIcon {...props} />}
        onClick={handleAddNewBox}
      />
    </div>
  );
};

export default React.memo(withThemeProvider(EmailBoxes, theme));
