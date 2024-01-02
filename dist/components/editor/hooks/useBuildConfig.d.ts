declare const useBuildConfig: () => ({ froalaEditorRef, toggleEditorFullScreen, props, language, setReadOnlyValue, parentContainerDivRef, froalaKey, }: {
    froalaEditorRef: any;
    toggleEditorFullScreen: any;
    props: any;
    language: any;
    setReadOnlyValue: any;
    parentContainerDivRef: any;
    froalaKey: any;
}) => {
    key: any;
    immediateReactModelUpdate: boolean;
    documentReady: boolean;
    heightMin: number;
    placeholder: string;
    charCounterCount: boolean;
    language: any;
    wordPasteModal: boolean;
    wordDeniedTags: string[];
    spellCheck: boolean;
    imageDefaultAlign: string;
    imageDefaultDisplay: string;
    imageEditButtons: string[];
    htmlAllowedTags: string[];
    toolbarButtons: string[];
    events: {
        contentChanged: () => void;
        keydown: (e: any) => void;
        focus: (e: any, editor: any) => void;
        keypress: (e: any) => void;
        initialized: (e: any, editor: any) => Promise<void>;
        "commands.after": (cmd: any) => void;
    };
};
export default useBuildConfig;
