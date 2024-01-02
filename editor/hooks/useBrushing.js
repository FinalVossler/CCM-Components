import React from 'react'
import Froalaeditor from 'froala-editor'
import { useTranslation } from 'react-i18next'

import { rgbToHex, getSelectionContainer, setSelectionAsCurrentClickedElement } from '../utils'

import LabelKeys from 'referential/label'

const useBrushing = ({ props, froalaEditorRef, parentContainerDivRef }) => {
  const [isBrushingIconActive, setIsBrushingIconActive] = React.useState(false)
  const { t } = useTranslation()

  // brush refs
  let selectedElementComputedStyle = React.useRef(null)
  let isBold = React.useRef(false)
  let isItalic = React.useRef(false)
  let isUnderlined = React.useRef(false)
  let isCrossed = React.useRef(false)
  let isUl = React.useRef(false)
  let isOl = React.useRef(false)
  let isSuperScript = React.useRef(false)
  let isSubScript = React.useRef(false)

  let pClasses = React.useRef([])
  // end refs

  // start brush button
  React.useEffect(() => {
    Froalaeditor.DefineIcon('brushIcon', { NAME: 'brush', SRC: 'assets/images/BrushCursor.svg', template: 'image', alt: 'Brush' })
    Froalaeditor.RegisterCommand('brushButton', {
      title: t(LabelKeys.ihm.froala_brush),
      focus: false,
      undo: false,
      icon: 'brushIcon',
      refreshAfterCallback: false,
      callback: function () {
        if (!selectedElementComputedStyle.current) {
          // Start Automatic select of the whole word if nothing is selected
          let selectedText = window.getSelection().toString()
          if (selectedText.length === 0) {
            setSelectionAsCurrentClickedElement(getSelectionContainer())
            selectedText = window.getSelection().toString()
          }
          // End Automatic select of the whole word if nothing is selected

          let selectionContainer = getSelectionContainer()

          isBold.current = this.format.is('strong')
          isItalic.current = this.format.is('em')
          isUnderlined.current = this.format.is('u')
          isCrossed.current = this.format.is('s')
          isUl.current = this.format.is('UL')
          isOl.current = this.format.is('OL')
          isSuperScript.current = this.format.is('sup')
          isSubScript.current = this.format.is('sub')
          if (this.format.is('p', { class: 'fr-text-spaced' })) {
            pClasses.current.push('fr-text-spaced')
          }
          if (this.format.is('p', { class: 'fr-text-uppercase' })) {
            pClasses.current.push('fr-text-uppercase')
          }
          if (this.format.is('p', { class: 'fr-text-bordered' })) {
            pClasses.current.push('fr-text-bordered')
          }
          if (this.format.is('p', { class: 'fr-text-gray' })) {
            pClasses.current.push('fr-text-gray')
          }

          selectedElementComputedStyle.current = window.getComputedStyle(selectionContainer)
          setIsBrushingIconActive(true)
        } else {
          selectedElementComputedStyle.current = null
          setIsBrushingIconActive(false)
        }
      }
    })

    // Drop down
    Froalaeditor.DefineIcon('moreButtonsDropdownIcon', { NAME: 'add', SVG_KEY: 'add' })
    Froalaeditor.RegisterCommand('moreButtonsDropdown', {
      title: 'More',
      type: 'dropdown',
      icon: 'moreButtonsDropdownIcon',
      undo: false,
      focus: false,
      options: {
        'superscript': 'Superscript',
        'subscript': 'Subscript'
      },
      refreshAfterCallback: true,
      callback: function (cmd, val, params) {
        switch (val) {
          case 'superscript': this.commands.superscript()
            break
          case 'subscript': this.commands.subscript()
            break
        }
      }
    })

    Froalaeditor.DefineIcon('cutIcon', { NAME: 'cut', SRC: 'assets/images/Cut.svg', template: 'image', alt: 'Cut' })
    Froalaeditor.RegisterCommand('cutButton', {
      title: 'Cut',
      focus: false,
      undo: false,
      icon: 'cutIcon',
      refreshAfterCallback: false,
      callback: function () {
        document.execCommand('cut')
      }
    })
    Froalaeditor.DefineIcon('copyIcon', { NAME: 'copy', SRC: 'assets/images/Copy.svg', template: 'image', alt: 'Copy' })
    Froalaeditor.RegisterCommand('copyButton', {
      title: 'Copy',
      focus: false,
      undo: false,
      icon: 'copyIcon',
      refreshAfterCallback: false,
      callback: function () {
        document.execCommand('copy')
      }
    })
  }, [])
  // end brush button

  // Used to listen to text selection event for brushing
  React.useEffect(() => {
    const handleMouseUp = (e) => {
      // Apply brushing result here:
      if (froalaEditorRef?.current && selectedElementComputedStyle.current) {
        let selectedText = window.getSelection().toString()
        if (selectedText.length === 0) {
          setSelectionAsCurrentClickedElement(e.srcElement)
          selectedText = window.getSelection().toString()
        }

        const editor = froalaEditorRef?.current.editor
        const selectionContainer = getSelectionContainer()
        if (!selectionContainer) {
          return
        }

        Array.from(selectedElementComputedStyle.current).filter(key => key === 'margin' || key === 'line-height')
          .forEach(key => selectionContainer.style.setProperty(key, selectedElementComputedStyle.current.getPropertyValue(key), selectedElementComputedStyle.current.getPropertyPriority(key)))

        if (!isBold.current && editor.format.is('strong')) {
          editor.commands.bold(false)
        }
        if (isBold.current && !editor.format.is('strong')) {
          editor.commands.bold()
          isBold.current = false
        }

        if (!isItalic.current && editor.format.is('em')) {
          editor.commands.italic(false)
        }
        if (isItalic.current && !editor.format.is('em')) {
          editor.commands.italic()
          isItalic.current = false
        }

        if (!isUnderlined.current && editor.format.is('u')) {
          editor.commands.underline(false)
        }
        if (isUnderlined.current && !editor.format.is('u')) {
          editor.commands.underline()
          isUnderlined.current = false
        }

        if (!isCrossed.current && editor.format.is('s')) {
          editor.commands.strikeThrough(false)
        }
        if (isCrossed.current && !editor.format.is('s')) {
          editor.commands.strikeThrough()
          isCrossed.current = false
        }

        if (isOl.current && !editor.format.is('OL')) {
          editor.lists.format('OL')
          isOl.current = false
        }
        if (isUl.current && !editor.format.is('UL')) {
          editor.lists.format('UL')
          isUl.current = false
        }

        if (pClasses.current.length > 0) {
          editor.format.apply('p', { class: pClasses.current.join(' ') })
          pClasses.current = []
        }

        if (!isSubScript.current && editor.format.is('sup')) {
          editor.commands.superscript(false)
        }
        if (isSuperScript.current && !editor.format.is('sup')) {
          editor.commands.superscript()
          isSuperScript.current = false
        }

        if (!isSubScript.current && editor.format.is('sub')) {
          editor.commands.subscript(false)
        }
        if (isSubScript.current && !editor.format.is('sub')) {
          editor.commands.subscript()
          isSubScript.current = false
        }

        editor.format.applyStyle('font-size', selectedElementComputedStyle.current?.getPropertyValue('font-size'))
        editor.format.applyStyle('font-family', selectedElementComputedStyle.current?.getPropertyValue('font-family'))
        editor.colors.text(rgbToHex(selectedElementComputedStyle.current?.getPropertyValue('color')))
        editor.colors.background(rgbToHex(selectedElementComputedStyle.current?.getPropertyValue('background-color')))

        setIsBrushingIconActive(false)
        selectedElementComputedStyle.current = null
      }
    }

    if (parentContainerDivRef.current) {
      const editableContainer = parentContainerDivRef.current.querySelector('.fr-element')
      if (editableContainer) {
        editableContainer.addEventListener('mouseup', handleMouseUp)
      }
    }

    return () => {
      if (parentContainerDivRef.current) {
        const editableContainer = parentContainerDivRef.current.querySelector('.fr-element')
        if (editableContainer) {
          editableContainer.removeEventListener('mouseup', handleMouseUp)
        }
      }
    }
  }, [parentContainerDivRef.current, parentContainerDivRef.current?.querySelector('.fr-element')])

  return { isBrushingIconActive }
}

export default useBrushing
