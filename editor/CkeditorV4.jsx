import React, { useEffect, useState, useRef } from 'react'
import i18next from 'i18next'
import CKEditor from 'ckeditor4-react'
import classnames from 'classnames'
import FileReader from 'FileReader'
import dompurify from 'dompurify'
import { useSelector } from 'react-redux'

import { getDataUrl } from 'app/tools/fileUtils'
import { getIsActive } from 'app/services/FeatureFlip'
import { CircularProgress } from '@material-ui/core'
import { getWebSpellCheckerConfig } from 'app/services/MailService'
import { WEBSPELLCHECKER } from 'referential/FeatureFlip'
import { doNothing } from 'app/tools/utils'

import './TextEditor.scss'

const timestamp = Math.floor(Date.now() / 1000)

const mailContentClass = 'ccm-mail-content'
const inlineStyle = 'font-family: "Calibri", sans-serif; font-size: 11pt'
const contentStyle = `.${mailContentClass} p, .${mailContentClass} ol, .${mailContentClass} ul { margin: 0 } .${mailContentClass} { ${inlineStyle} }`

const defaultLanguage = 'fr_FR'

const scaytLanguages = {
  en: 'en_GB',
  fr: 'fr_FR'
}

CKEditor.editorUrl = `/ckeditor/4.16.1/ckeditor.js?${timestamp}`
window.CKEDITOR_BASEPATH = '/ckeditor/4.16.1/'

async function buildGlobalConfig (webSpellFeatureFlipIsActive, webSpellConfig, language, disableMaximize, disabled, hideToolbar, isText, withTemplateVariable, webspellCheckerHealthCheckRef) {
  let webSpellIsActive = webSpellFeatureFlipIsActive && !disabled && !hideToolbar

  const config = await buildConfig(webSpellIsActive, webSpellConfig, language, disableMaximize, disabled, hideToolbar, withTemplateVariable, webspellCheckerHealthCheckRef)
  if (isText) {
    config.entities_latin = false
    config.autoParagraph = false
    config.enterMode = 2 // ENTER_BR
  }

  return {
    config: config,
    toolbar: buildToolbarGroups(webSpellIsActive, isText, withTemplateVariable, disabled)
  }
}

async function buildConfig (webSpellIsActive, webSpellConfig, language, disableMaximize, disabled, hideToolbar, withTemplateVariable, webspellCheckerHealthCheckRef) {
  let pluginsToRemove = 'elementspath, wsc'
  pluginsToRemove += disableMaximize ? ', maximize' : ''
  pluginsToRemove += disabled ? ', showborders' : ''
  let extraPlugins = 'base64image,colorbutton,colordialog,font,smiley,indent,indentlist,indentblock,copyformatting'
  extraPlugins += withTemplateVariable ? ',templateVariable' : ''

  let disableNativeSpellChecker = webSpellIsActive || disabled || hideToolbar
  const config = {
    fontSize_sizes: '8/8pt;9/9pt;10/10pt;10,5/10.5pt;11//11pt;12/12pt;14/14pt;16/16pt;18/18pt;20/20pt;22/22pt;24/24pt;26/26pt;28/28pt;36/36pt;48/48pt;72/72pt;',

    // Remove some buttons provided by the standard plugins, which are
    // not needed in the Standard(s) toolbar.
    removeButtons: 'Subscript,Superscript,Image,Anchor',

    removePlugins: pluginsToRemove,

    // Set the most common block elements.
    format_tags: 'p;h1;h2;h3;pre',

    // Simplify the dialog windows.
    removeDialogTabs: 'image:advanced;link:advanced;link:upload',

    extraPlugins: extraPlugins,

    // Mock pour activer le transform d'images en base 64
    filebrowserUploadUrl: '/api/mock',

    extraAllowedContent: [
      'div{*}',
      'td{*}',
      'span{*}',
      'img{*}',
      'hr[data-next-mail-separator]',
      'customsignature',
      'history',
      'img[data-cid]'].join(';'),

    disallowedContent: 'script; *[on*]',

    disableNativeSpellChecker: disableNativeSpellChecker,

    bodyClass: mailContentClass,

    contentsCss: [contentStyle],

    autoParagraph: false
  }

  if (disabled) {
    config.allowedContent = true
  }

  const configureWebSpellChecker = () => {
    Object.keys(webSpellConfig).forEach((key) => { config[key] = webSpellConfig[key] })

    config.scayt_multiLanguageMode = true
    config.scayt_autoStartup = true
    config.grayt_autoStartup = true
    config.scayt_sLang = scaytLanguages[language] || defaultLanguage
    config.wsc_lang = scaytLanguages[language] || defaultLanguage
    config.scayt_elementsToIgnore = 'history'
  }

  configureWebSpellChecker()

  if (webSpellIsActive && webspellCheckerHealthCheckRef.current.isHealthy) {
    try {
      if (!webspellCheckerHealthCheckRef.current.alreadyCheckedHealth) {
        const scaytUrlTest = await fetch(webSpellConfig.scayt_srcUrl, { method: 'HEAD' })
        if (scaytUrlTest.ok) {
          configureWebSpellChecker()
        }
      } else {
        configureWebSpellChecker()
      }
    } catch {
      webspellCheckerHealthCheckRef.current.isHealthy = false
    }
    webspellCheckerHealthCheckRef.current.alreadyCheckedHealth = true
  }

  return config
}

function buildToolbarGroups (webSpellIsActive, isText, withTemplateVariable, disabled) {
  if (disabled) return []
  if (isText) return withTemplateVariable ? [{ name: 'variables', groups: ['templateVariables'] }] : []
  const toolbar = [
    { name: 'basicstyles', groups: ['basicstyles', 'copyformatting', 'cleanup'] },
    { name: 'styles', groups: ['styles', 'format', 'font', 'fontSize'] },
    { name: 'colors', groups: ['colors'] },
    { name: 'paragraph', groups: ['list', 'indent'] },
    { name: 'links' },
    '/',
    { name: 'insert', groups: ['smiley'] },
    { name: 'clipboard', groups: ['clipboard', 'undo'] },
    { name: 'editing', groups: webSpellIsActive ? ['find', 'selection', 'spellchecker'] : ['find', 'selection'] },
    { name: 'tools' }
  ]

  if (withTemplateVariable) {
    toolbar.push({ name: 'variables', groups: ['templateVariables'] })
  }

  return toolbar
}

const wrapContent = (content) => `<html><head><style><!-- ${contentStyle} --></style></head><body><div class="${mailContentClass}" style="${inlineStyle}" >${content}</div></body></html>`

const TextEditor = React.forwardRef(({ error, dragAndDropFileZone, disabled, height = 450, hideToolbar, onFileAdded, onEmbeddedImageAdded, disableMaximize, webSpellIsActive, isText, withTemplateVariable, isOverlayActive = false, ...props }, ref) => {
  const [language, setLanguage] = useState('')
  const [config, setConfig] = useState()
  const [isConfigLoaded, setIsConfigLoaded] = useState(false)
  const containerRef = useRef()
  const webspellCheckerHealthCheckRef = useRef({ isHealthy: true, alreadyCheckedHealth: false })

  const isResizingMailPopup = useSelector(state => state.mail.isResizingMailPopup)

  useEffect(() => {
    const configureCkeditor = async (webSpellFeatureFlipIsActive = false, webSpellConfig = {}) => {
      const globalConfig = await buildGlobalConfig(webSpellFeatureFlipIsActive && webSpellIsActive, webSpellConfig,
        i18next.languageNormalized() || '', disableMaximize, disabled, hideToolbar, isText, withTemplateVariable, webspellCheckerHealthCheckRef)
      setConfig({
        ...globalConfig.config,
        toolbarGroups: globalConfig.toolbar,
        language,
        height
      })
      setIsConfigLoaded(true)
    }

    const languageChangedUnsubscribe = i18next.subscribe('languageChanged', setLanguage)

    setLanguage(i18next.language || '')
    if (webspellCheckerHealthCheckRef.current.isHealthy) {
      Promise.all([getIsActive(WEBSPELLCHECKER), getWebSpellCheckerConfig()])
        .then(([webSpellFeatureFlipIsActive, webSpellConfig]) => {
          configureCkeditor(webSpellFeatureFlipIsActive, webSpellConfig)
        })
    } else {
      configureCkeditor()
    }

    return () => { languageChangedUnsubscribe() }
  }, [height])

  useEffect(() => {
    if (props.onChangeFromRef) {
      props.onChangeFromRef()
    }
    setConfig({ ...config, height })
  }, [height])

  const onFileUploadRequest = (evt) => {
    const file = evt.data?.fileLoader?.file
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => { evt.editor.insertHtml(`<img src="${reader.result}" alt="${file.name}" />`) }
    }
    evt.cancel()
  }

  const onPaste = (evt) => {
    const { dataValue, dataTransfer, method } = evt.data
    const files1 = dataTransfer.$ ? dataTransfer.$.files : []
    const files2 = dataTransfer._ ? dataTransfer._.files : []
    const files = [...Array.from(files1), ...Array.from(files2)]

    if (files.length === 1 && files[0].type.startsWith('image') && dataValue.startsWith('<img ')) {
      return
    }

    if (method === 'drop' && dragAndDropFileZone) {
      let processedFiles = []
      files.forEach(file => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
          processedFiles.push(file)
          if (processedFiles.length === files.length) {
            onFileAdded(processedFiles)
          }
        }
        evt.cancel()
      })
    } else if (dataValue) {
      const text = dataValue.replace(/data-cke-upload-id="[0-9]+"/gmi, '')
      evt.editor.insertHtml(text)
      evt.cancel()
    }
  }

  const onDialogShow = (evt) => {
    // Fix ckeditorDialog inside muiDialog (input text are unreachable)
    containerRef.current.appendChild(document.getElementsByClassName('cke_dialog_background_cover')[0])
    containerRef.current.appendChild(evt.data.parts.dialog.$.parentElement)

    // Reset and reinit content for iframe initialisation BRA
    evt.data.reset()

    if (evt.data.definition.onShow) {
      evt.data.definition.onShow.bind(evt.data)()
    }
  }

  const onDialogHide = (evt) => {
    // Restore dialog position
    document.body.appendChild(evt.data.parts.dialog.$.parentElement)
  }

  const onDialogDefinition = (evt) => {
    const { name, definition } = evt.data
    if (name === 'link') {
      // Get a reference to the "Link Info" tab.
      let linkType = definition.getContents('info').get('linkType')
      linkType.items = linkType.items.filter(it => it[1] !== 'anchor')
    }
  }

  const onBeforeLoad = (editor) => {
    editor.disableAutoInline = true // https://github.com/ckeditor/ckeditor4-react/issues/57
    editor.on('dialogDefinition', onDialogDefinition)
  }

  const onInsertElement = (event) => {
    const element = event.data.$
    if (element && element.tagName.toLowerCase() === 'img' && element.src.startsWith(`${window.CKEDITOR.basePath}plugins/smiley/`)) {
      event.cancel()
      event.stop()

      // Convert smiley to base64 images
      getDataUrl(element.src)
        .then((base64) => {
          if (element.parentElement) {
            element.parentElement.removeChild(element)
          }

          const sanitizedBase64 = dompurify.sanitize(base64)
          const sanitizedTitle = dompurify.sanitize(element.title)

          const img = event.editor.document.createElement('img', {
            attributes: {
              src: sanitizedBase64,
              'data-cke-saved-src': sanitizedBase64,
              title: sanitizedTitle,
              alt: sanitizedTitle,
              width: element.width,
              height: element.height
            }
          })

          event.editor.insertElement(img)
        })
    } else if (element && element.tagName.toLowerCase() === 'img' && element.currentSrc && element.currentSrc.startsWith('data:image/jpeg;base64')) {
      if (onEmbeddedImageAdded) {
        onEmbeddedImageAdded({ base64: element.currentSrc })
      }
    }
  }

  const onInstanceReady = (e) => {
    // permet d'ouvrir les liens avec un click ou ctrl-click
    if (e?.editor?.document?.$?.body) {
      e.editor.document.$.body.addEventListener('click', (e) => {
        const url = e.target.href
        if (url && (disabled || hideToolbar || e.ctrlKey === true)) {
          window.open(url)
        }
      })
    }
  }

  const handleDataReady = (e) => {
    if (props.onDataReady) {
      const data = e.editor.getData()
      props.onDataReady(data)
    }
  }

  useEffect(() => {
    return () => {
      try {
        if (ref?.current?.editor) {
          ref.current.editor.undoManager.reset()
          ref.current.editor.setData('')
          ref.current.editor.removeAllListeners()
          ref.current.editor.resetUndo()
          ref.current.editor.destroy(false)
          ref.current.editor = undefined
        }
      } catch (e) { }
    }
  }, [])

  if (!isConfigLoaded) {
    return <CircularProgress />
  }

  return (
    <div
      ref={containerRef}
      className={classnames('TextEditorComponent', { error, hideToolbar })}
      data-cy={props['data-cy']}
    >
      <CKEditor
        ref={ref}
        key={config.height}
        {...props}
        config={config}
        readOnly={disabled}
        onFileUploadRequest={onFileUploadRequest}
        onPaste={onPaste}
        onDialogShow={onDialogShow}
        onDialogHide={onDialogHide}
        onBeforeLoad={onBeforeLoad}
        onInsertElement={onInsertElement}
        onInstanceReady={onInstanceReady}
        onDataReady={handleDataReady}
        data-cy={props['data-cy'] + 'textArea'}
      />

      {(isResizingMailPopup || isOverlayActive) && <div className='textEditorOverlay' />}
    </div>
  )
})

TextEditor.defaultProps = {
  onFileAdded: doNothing
}

export { wrapContent }

export default TextEditor
