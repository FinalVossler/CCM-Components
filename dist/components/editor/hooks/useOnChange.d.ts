declare const useOnChange: ({ parentContainerDivRef, froalaEditorRef, onChange, setReadOnlyValue, }: {
    parentContainerDivRef: any;
    froalaEditorRef: any;
    onChange: any;
    setReadOnlyValue: any;
}) => {
    handleOnChange: (value: any) => void;
};
export default useOnChange;
