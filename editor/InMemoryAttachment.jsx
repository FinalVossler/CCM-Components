import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Tooltip } from '@material-ui/core'
import WarningIcon from '@material-ui/icons/WarningRounded'
import Blob from 'Blob'

import FileSize from 'app/core/components/text/FileSize'
import LabelKeys from 'referential/label'
import { saveOrOpenBlob } from 'app/tools/fileUtils'

const downloadFile = (file) => (e) => {
  e.preventDefault()
  let blob = new Blob([file], { type: file.type })
  saveOrOpenBlob(blob, file.name)
}

export default function InMemoryAttachment ({ attachment }) {
  const { t } = useTranslation()

  return (
    <Link onClick={downloadFile(attachment)}>
      {attachment.hasError &&
        <Tooltip title={t(LabelKeys.ihm.mail_attachments_single_warning_tooltip)}><WarningIcon color='error' className='attachment-icon' /></Tooltip>
      }
      <span>
        {attachment.name} (<FileSize size={attachment.size} />)
      </span>
    </Link>
  )
}
