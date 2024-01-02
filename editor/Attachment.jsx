import React, { useRef } from 'react'
import LabelKeys from 'referential/label'
import ButtonLoading from 'app/core/components/button/ButtonLoading'
import AttachmentChipList from './AttachmentChipList'
import { doNothing } from 'app/tools/utils'

let fileKeyId = 0

function Attachment ({ value, onChange, onFileChange, disabled }) {
  const inputRef = useRef()

  const onFileAdded = event => {
    if (!event.target.value || !event.target.files || event.target.files.length === 0) {
      // BUG ie : lorsque l'input est vidé (via event.target.value = ''), cette méthode est appelée à nouveau avec un contenu vide
      return
    }

    if (disabled) {
      return
    }

    const inputFiles = event.target.files

    const files = [...value]
    for (let i = 0; i < inputFiles.length; i++) {
      const file = inputFiles[i]
      file.key = `from_attachment_${fileKeyId++}`
      files.push(file)
    }

    onChange(files)
    onFileChange(files)

    event.target.value = ''
  }

  return <>
    <ButtonLoading onClick={() => { inputRef.current.click() }} disabled={disabled}>{LabelKeys.ihm.mail_attachments_add}</ButtonLoading>
    <AttachmentChipList value={value} onChange={onChange} onFileChange={onFileChange} disabled={disabled} />
    <input ref={inputRef} multiple type='file' onChange={onFileAdded} style={{ display: 'none' }} />
  </>
}

Attachment.defaultProps = {
  onChange: doNothing,
  onFileChange: doNothing
}

export default Attachment
