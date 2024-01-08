import React from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./filesInput.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";
import Button from "../button";
import { IButtonProps } from "../button/Button";
import { CrossIcon } from "../icons";

export interface IFilesInputProps {
  theme?: ITheme;
  buttonProps: IButtonProps;
  isMulti?: boolean;
}

const FilesInput: React.FunctionComponent<IFilesInputProps> = (
  props: IFilesInputProps
) => {
  const [files, setFiles] = React.useState<File[]>([]);

  const inputRef: React.MutableRefObject<HTMLInputElement> =
    React.useRef<HTMLInputElement>(null);

  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.buttonProps.onClick) {
      props.buttonProps.onClick(e);
    }
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removeFile = (fileIndex) => () => {
    const newFiles = [...files];
    newFiles.splice(fileIndex, 1);
    setFiles(newFiles);
  };

  const handleOnChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className={styles.filesInputContainer}>
      <Button {...props.buttonProps} onClick={handleButtonClick} />
      <input
        type="file"
        hidden
        onChange={handleOnChangeFiles}
        multiple={Boolean(props.isMulti)}
        ref={inputRef}
      />

      <div className={styles.filesContainer}>
        {files.map((file: File, i) => {
          return (
            <div className={styles.singleFileContainer}>
              <span className={styles.fileName}>{file.name}</span>
              <CrossIcon onClick={removeFile(i)} className={styles.crossIcon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(withThemeProvider(FilesInput, theme));
