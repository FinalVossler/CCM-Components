import React from 'react'
import { useDispatch } from 'react-redux'

import { getWebSpellCheckerConfig } from 'app/services/MailService'
import { doNothing } from 'app/tools/utils'
import { getIsActive } from 'app/services/FeatureFlip'
import { WEBSPELLCHECKER } from 'referential/FeatureFlip'
import { getEditorContent } from 'app/core/components/editor/utils'
import { toggleEditorFullScreen } from 'app/store/ui/actions'

const useBuildConfig = () => {
  const dispatch = useDispatch()

  const buildConfig = React.useCallback(({ froalaEditorRef, props, i18n, cursorPositionRef, setReadOnlyValue, parentContainerDivRef }) => {
    const toolbarButtons = ['bold', 'italic', 'underline', 'strikeThrough', '|', 'brushButton', 'clearFormatting', '|', 'paragraphFormat', '|', 'fontFamily', '|', 'fontSize', '|', 'textColor', 'backgroundColor', '|', 'formatOL', 'formatUL', '|', 'outdent', 'indent', '|', 'insertLink', 'insertTable', 'insertHR', 'specialCharacters', 'emoticons', 'insertImage', '|', 'cutButton', 'copyButton', '|', 'undo', 'redo', 'fullscreen', 'moreButtonsDropdown', 'print', 'help']

    if (props.withTemplateVariables) {
      toolbarButtons.push('Variables')
    }

    return ({
      key: process.env.FROALA_KEY,
      immediateReactModelUpdate: true,
      documentReady: true,
      heightMin: 250,
      placeholder: '',
      charCounterCount: true,
      language: i18n.language.slice(0, i18n.language.indexOf('-') > 0 ? i18n.language.indexOf('-') : i18n.language.length),
      wordPasteModal: false,
      wordDeniedTags: [''],
      spellCheck: true,
      imageDefaultAlign: 'center',
      imageDefaultDisplay: 'inline',
      imageEditButtons: ['imageReplace', 'imageAlign', 'imageCaption', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageStyle', 'imageAlt', 'imageSize'],
      htmlAllowedTags: ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'nobr', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp', 'history', 'customsignature'
      ],
      toolbarButtons: props.hideToolbar ? [] : toolbarButtons,
      events: {
        'contentChanged': () => {
          const editor = froalaEditorRef.current.editor

          const images = editor.el.querySelectorAll('img')
          images.forEach((image) => {
            const currentSrc = image.getAttribute('src')

            if (currentSrc && !currentSrc.startsWith('data:image')) {
              const canvas = document.createElement('canvas')
              const context = canvas.getContext('2d')
              const img = new Image()
              img.src = currentSrc

              img.onload = () => {
                canvas.width = img.width
                canvas.height = img.height
                context.drawImage(img, 0, 0, img.width, img.height)
                const base64Data = canvas.toDataURL('image/png')
                image.setAttribute('src', base64Data)
              }
            }
          })
        },
        'focus': function (e, editor) {
        },
        'keypress': function (e) {
          if (e.key === ' ') {
            // Transform hyphens and space into an unordered list
            const previousCharacter = document.getSelection().anchorNode.textContent[document.getSelection().baseOffset - 1]

            if (previousCharacter === '-') {
              froalaEditorRef.current.editor.lists.format('UL')
              let newFormattedValue = getEditorContent(froalaEditorRef)
              newFormattedValue = newFormattedValue.replace(/<li>-/g, (match) => {
                return '<li>'
              })

              // Track the cursor's last position (tag and offset)
              const tagPath = []
              let cursorPosition
              if (window.getSelection().rangeCount > 0) {
                try {
                  const range = window.getSelection().getRangeAt(0)
                  cursorPosition = range.startOffset
                  let cursorTag = window.getSelection().baseNode.parentNode
                  let froalaParent = parentContainerDivRef.current.querySelector('.fr-element')
                  const getPathToParent = (tag, path) => {
                    let cursorTagParent = tag.parentNode
                    let parentIsFroala = cursorTagParent === froalaParent
                    let cursorTagIndexInParent = Array.prototype.indexOf.call(cursorTagParent.children, tag)
                    path.push(cursorTagIndexInParent)
                    if (parentIsFroala) {
                      return path
                    } else {
                      return getPathToParent(cursorTagParent, path)
                    }
                  }
                  getPathToParent(cursorTag, tagPath)

                  // Now we update the froala content
                  froalaEditorRef.current.editor.html.set(newFormattedValue)

                  const restoreCursorPosition = () => {
                    try {
                      const selection = window.getSelection()
                      const range = document.createRange()
                      const tag = tagPath.reverse().reduce((acc, current) => acc.children[current] || acc, froalaParent)
                      try {
                        range.setStart(tag.firstChild, cursorPosition - 1)
                      } catch {
                        // Sometimes in our formatting, we take off a character. This means that cursorPosition will change. So we adapt it here
                        range.setStart(tag.firstChild, tag.firstChild.length)
                      }
                      selection.removeAllRanges()
                      selection.addRange(range)
                    } catch (e) {
                      doNothing()
                    }
                  }

                  // Now we restore the cursor
                  restoreCursorPosition()
                } catch (e) {
                  doNothing()
                }
              }
            }
          }
        },
        'initialized': async function (e, editor) {
          const [webSpellFeatureFlipIsActive, webSpellConfig] = await Promise.all([getIsActive(WEBSPELLCHECKER), getWebSpellCheckerConfig()])
          try {
            const urlTest = await fetch(webSpellConfig.scayt_srcUrl, { method: 'HEAD' })
            if (urlTest.ok && webSpellFeatureFlipIsActive) {
              window.WEBSPELLCHECKER_CONFIG = {
                autoSearch: true,
                autoDestroy: true,
                autocorrect: true,
                disableDictionariesPreferences: true,
                suggestionsCount: 3,
                lang: {
                  en: 'en_GB',
                  fr: 'fr_FR'
                }[i18n.language],
                serviceHost: `${webSpellConfig.scayt_serviceHost}:${webSpellConfig.scayt_servicePort}`,
                ignoreElements: 'history'
              }

              window.WEBSPELLCHECKER.init({
                container: this.$iframe ? this.$iframe[0] : this.el
              })
            }
          } catch {
            doNothing()
          }

          // Initializing value
          if (props.initialValue) {
            froalaEditorRef.current.editor.html.set(props.initialValue)
            froalaEditorRef.current.editor.didSetInitialValue = true
            setReadOnlyValue(props.initialValue)
          }

          this.events.on('drop', (e) => {
            e.preventDefault()
            const files = Array.from(e.originalEvent.dataTransfer.files)

            let numberOfNonImageFiles = 0
            const processedFiles = []

            // If all files are of kind "file", then it's likely a drag and drop from outside the editor
            // If it's from outside the editor, then we should instead rely on react-dropzone to be able to drop multiple images (not natively support by Froala)
            if (files.some(f => f.type.indexOf('image') !== -1) && [...e.originalEvent.dataTransfer.items].every(el => el.kind === 'file')) {
              e.preventDefault()
              return false
            }

            files.forEach(file => {
              if (file.type.indexOf('image') === -1) {
                numberOfNonImageFiles++
                const reader = new FileReader()
                reader.readAsDataURL(file)

                reader.onload = () => {
                  processedFiles.push(file)

                  if (processedFiles.length === numberOfNonImageFiles) {
                    if (props.onFileAdded) {
                      props.onFileAdded(processedFiles)
                    }
                  }
                }
              }
            })

            return numberOfNonImageFiles === 0
          }, true)
        },
        'commands.after': (cmd, param1, param2) => {
          if (cmd === 'fullscreen') {
            dispatch(toggleEditorFullScreen())
          }
        }
      }
    })
  }, [])

  return buildConfig
}

export default useBuildConfig
