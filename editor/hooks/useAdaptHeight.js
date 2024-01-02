import React from 'react'

const DIALOG_HEIGHT_MARGIN = 300

const useAdaptHeight = ({ froalaEditorRef, props, parentContainerDivRef }) => {
  // The readonly version of FroalaEditorView has a different ref composition (different properties) and will need a state variable to set the height
  const [readOnlyEditorHeight, setReadOnlyEditorHeight] = React.useState(150)

  React.useEffect(() => {
    // Adapting the readonly height depending on the dialog height
    if (props.dialogHeight && props.readOnly) {
      setReadOnlyEditorHeight(props.dialogHeight - DIALOG_HEIGHT_MARGIN)
    }
    // Adapting the editor height to not conflict with the history section (case: transfer or respond to a email)
    if (props.height && parentContainerDivRef.current) {
      const frElement = parentContainerDivRef.current.querySelector('.fr-element')
      if (frElement) {
        froalaEditorRef.current.editor.opts.height = props.height
        froalaEditorRef.current.editor.size.refresh()
        parentContainerDivRef.current.querySelector('.fr-element').style.overflow = 'auto'
      }
    }
  }, [parentContainerDivRef.current, froalaEditorRef?.current?.editor, props.dialogHeight, froalaEditorRef?.current?.editor?.size, props.height])

  return { readOnlyEditorHeight }
}

export default useAdaptHeight
