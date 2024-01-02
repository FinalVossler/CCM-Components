import React from "react";
import { IFroalaProps } from "../Froala";
import FroalaEditorComponent from "react-froala-wysiwyg";

const useAdaptToInitialValue = ({
  froalaEditorRef,
  props,
  setReadOnlyValue,
}: {
  froalaEditorRef: React.MutableRefObject<FroalaEditorComponent>;
  props: IFroalaProps;
  setReadOnlyValue: (readOnlyValue) => void;
}) => {
  // We set the initial value after the editor was initialized in the buildConfig method. But sometimes the props.initialValue
  // gets passed later, after the initialization of the editor, like when the template changes
  React.useEffect(() => {
    if (
      props.initialValue &&
      froalaEditorRef &&
      froalaEditorRef.current &&
      //@ts-ignore
      froalaEditorRef.current.editor?.html
    ) {
      //@ts-ignore
      froalaEditorRef.current.editor.html.set(props.initialValue);
      setReadOnlyValue(props.initialValue);
    }
  }, [props.initialValue, froalaEditorRef.current]);
};

export default useAdaptToInitialValue;
