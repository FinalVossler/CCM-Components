export const rgbToHex = (rgb) => {
  if (rgb.indexOf('rgb(') === -1 && rgb.indexOf('rgba(' === -1)) {
    return rgb
  }

  let a = rgb.split('(')[1].split(')')[0]
  a = a.split(',')

  const red = Math.min(255, Math.max(0, a[0]))
  const green = Math.min(255, Math.max(0, a[1]))
  const blue = Math.min(255, Math.max(0, a[2]))

  // Convert each component to hexadecimal and pad with zeros if needed
  const redHex = red.toString(16).padStart(2, '0')
  const greenHex = green.toString(16).padStart(2, '0')
  const blueHex = blue.toString(16).padStart(2, '0')

  // Combine the hexadecimal values to form the hex color code
  const hexColor = `#${redHex}${greenHex}${blueHex}`

  return hexColor
}

export const getSelectionContainer = () => {
  let selectionContainer
  const selectionStartContainer = getSelection().getRangeAt(0).startContainer.parentNode
  const selectionEndContainer = getSelection().getRangeAt(0).endContainer.parentNode

  if (selectionStartContainer.childElementCount < selectionEndContainer.childElementCount) {
    selectionContainer = selectionStartContainer
  } else {
    selectionContainer = selectionEndContainer
  }

  if (selectionContainer.querySelector('span')) {
    return selectionContainer.querySelector('span')
  }

  return selectionContainer
}

export const getEditorContent = (ref) => {
  if (ref.current) {
    const editorInstance = ref.current.editor
    if (editorInstance && editorInstance.html) {
      return editorInstance.html.get()
    }
  }
}

export const setSelectionAsCurrentClickedElement = (element) => {
  const range = document.createRange()
  range.selectNodeContents(element)
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
}
