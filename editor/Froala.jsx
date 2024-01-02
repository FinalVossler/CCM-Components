import React from 'react'
import 'froala-editor/js/plugins.pkgd.min.js'
import 'froala-editor/js/languages/fr.js'
import { useTranslation } from 'react-i18next'
import FroalaEditorComponent from 'react-froala-wysiwyg'
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'

import useAdaptHeight from './hooks/useAdaptHeight'
import useAdaptToInitialValue from './hooks/useAdaptToInitialValue'
import useBrushing from './hooks/useBrushing'
import useTemplateVariables from './hooks/useTemplateVariables'
import useBuildConfig from './hooks/useBuildConfig'
import useDragAndDropImages from './hooks/useDragAndDropImages'
import useOnChange from './hooks/useOnChange'

import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import './Froala.scss'

const Froala = React.forwardRef((props, froalaEditorRef) => {
  const [readOnlyValue, setReadOnlyValue] = React.useState(props.initialValue)

  const { i18n } = useTranslation()

  // start refs
  // used as a reference to determine the popup's height and track the cursor's last position after formatting
  const parentContainerDivRef = React.useRef(null)
  // end refs

  const { readOnlyEditorHeight } = useAdaptHeight({ froalaEditorRef, props, parentContainerDivRef })
  useAdaptToInitialValue({ froalaEditorRef, props, setReadOnlyValue })
  const { isBrushingIconActive } = useBrushing({ props, froalaEditorRef, parentContainerDivRef })
  useTemplateVariables({ props })
  const buildConfig = useBuildConfig()
  const { getRootProps } = useDragAndDropImages({ froalaEditorRef })
  const { handleOnChange } = useOnChange({ parentContainerDivRef, froalaEditorRef, onChange: props.onChange, setReadOnlyValue })

  return (
    <div
      className={'froalaEditor' + (props.error ? ' froalaEditorError' : '')}
      data-cy={props['data-cy']}
      ref={parentContainerDivRef}
      style={{
        cursor: isBrushingIconActive ? 'url(assets/images/BrushCursor.svg), auto' : 'auto',
        ...(props.readOnly ? { height: readOnlyEditorHeight } : {})
      }}
    >
      <div className='dropImagesZone' {...(props.readOnly ? {} : getRootProps())}>
        {!props.readOnly &&
          <FroalaEditorComponent
            tag='textarea'
            config={buildConfig({ froalaEditorRef, props, i18n, setReadOnlyValue, parentContainerDivRef })}
            ref={froalaEditorRef}
            onModelChange={handleOnChange}
            height={props.height}
          />
        }
        {(props.readOnly) &&
          <FroalaEditorView
            tag='div'
            config={buildConfig({ froalaEditorRef, props, i18n, setReadOnlyValue, parentContainerDivRef })}
            ref={froalaEditorRef}
            model={readOnlyValue}
          />
        }
      </div>
    </div>
  )
})

export default React.memo(Froala)
