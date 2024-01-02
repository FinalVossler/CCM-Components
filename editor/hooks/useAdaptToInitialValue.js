import React from 'react'

const useAdaptToInitialValue = ({ froalaEditorRef, props, setReadOnlyValue }) => {
  // We set the initial value after the editor was initialized in the buildConfig method. But sometimes the props.initialValue
  // gets passed later, after the initialization of the editor, like when the template changes
  React.useEffect(() => {
    if (props.initialValue && froalaEditorRef && froalaEditorRef.current && froalaEditorRef.current.editor?.html) {
      froalaEditorRef.current.editor.html.set(props.initialValue)
      setReadOnlyValue(props.initialValue)
    }
  }, [props.initialValue, froalaEditorRef.current])
}

export default useAdaptToInitialValue
