declare const useDragAndDropImages: ({ froalaEditorRef }: {
    froalaEditorRef: any;
}) => {
    getRootProps: <T extends import("react-dropzone").DropzoneRootProps>(props?: T) => T;
};
export default useDragAndDropImages;
