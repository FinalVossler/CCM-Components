import React from "react";
import { IFroalaProps } from "../Froala";
import FroalaEditorComponent from "react-froala-wysiwyg";
declare const useAdaptToInitialValue: ({ froalaEditorRef, props, setReadOnlyValue, }: {
    froalaEditorRef: React.MutableRefObject<FroalaEditorComponent>;
    props: IFroalaProps;
    setReadOnlyValue: (readOnlyValue: any) => void;
}) => void;
export default useAdaptToInitialValue;
