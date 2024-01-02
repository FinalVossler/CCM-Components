import React from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/themes/dark.css";

import useAdaptToInitialValue from "./hooks/useAdaptToInitialValue";
import useCustomToolbarButtons from "./hooks/useCustomToolbarButtons";
import useTemplateVariables from "./hooks/useTemplateVariables";
import useBuildConfig from "./hooks/useBuildConfig";
import useDragAndDropImages from "./hooks/useDragAndDropImages";
import useOnChange from "./hooks/useOnChange";

import { ITheme, theme } from "ccmtypes";
import useStyles from "./froala.styles";

export interface IFroalaProps {
  initialValue?: string;
  onChange?: (newValue: string) => void;
  error?: string;
  readOnly?: boolean;
  language?: string;
  toggleEditorFullScreen?: () => void;
  brushTitle?: string;
  theme?: ITheme;
  froalaKey?: string;
}

const Froala = React.forwardRef(
  (
    props: IFroalaProps,
    froalaEditorRef: React.MutableRefObject<FroalaEditorComponent | null>
  ) => {
    const [readOnlyValue, setReadOnlyValue] = React.useState(
      props.initialValue
    );

    // start refs
    // used as a reference to track the cursor's last position after formatting
    const parentContainerDivRef = React.useRef(null);
    // end refs

    const styles = useStyles({ theme: props.theme || theme });
    useAdaptToInitialValue({ froalaEditorRef, props, setReadOnlyValue });
    const { isBrushingIconActive } = useCustomToolbarButtons({
      brushTitle: props.brushTitle,
      froalaEditorRef,
      parentContainerDivRef,
    });
    useTemplateVariables({ props });
    const buildConfig = useBuildConfig();
    const { getRootProps: getRootPropsForDragAndDrop } = useDragAndDropImages({
      froalaEditorRef,
    });
    const { handleOnChange } = useOnChange({
      parentContainerDivRef,
      froalaEditorRef,
      onChange: props.onChange,
      setReadOnlyValue,
    });

    return (
      <div
        className={
          styles.froalaEditorContainer +
          (props.error ? " " + styles.froalaEditorError : "")
        }
        data-cy={props["data-cy"]}
        ref={parentContainerDivRef}
        style={{
          cursor: isBrushingIconActive
            ? "url(assets/images/BrushCursor.svg), auto"
            : "auto",
        }}
      >
        <div
          className={styles.dropImagesZone}
          {...(props.readOnly ? {} : getRootPropsForDragAndDrop())}
        >
          {!props.readOnly && (
            <FroalaEditorComponent
              tag="textarea"
              config={buildConfig({
                froalaEditorRef,
                props,
                language: props.language,
                setReadOnlyValue,
                parentContainerDivRef,
                toggleEditorFullScreen: props.toggleEditorFullScreen,
                froalaKey: props.froalaKey,
              })}
              ref={froalaEditorRef}
              onModelChange={handleOnChange}
            />
          )}
          {props.readOnly && (
            <FroalaEditorView
              tag="div"
              config={buildConfig({
                froalaEditorRef,
                props,
                language: props.language,
                setReadOnlyValue,
                parentContainerDivRef,
                toggleEditorFullScreen: props.toggleEditorFullScreen,
                froalaKey: props.froalaKey,
              })}
              ref={froalaEditorRef}
              model={readOnlyValue}
            />
          )}
        </div>
      </div>
    );
  }
);

export default React.memo(Froala);
