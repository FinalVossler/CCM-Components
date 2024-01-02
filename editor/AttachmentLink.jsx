import React from 'react'
import { Link, Tooltip } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import LabelKeys from 'referential/label'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import { encodeNameForUrl } from 'app/tools/fileUtils'
import FileSize from 'app/core/components/text/FileSize'
import WarningIcon from '@material-ui/icons/WarningRounded'

import './AttachmentLink.scss'

const fileLabel = (file, withIcon) => {
  const { t } = useTranslation()

  return <span className='attachment-link'>
    {withIcon && <>
      {file.hasError && <Tooltip title={t(LabelKeys.ihm.mail_attachments_single_warning_tooltip)}><WarningIcon color='error' className='attachment-icon' /></Tooltip>}
      <AttachFileIcon className='attachment-icon' fontSize='small' />
    </>}
    {file.fileName} (<FileSize size={file.contentLength} />)
  </span>
}

export default function AttachmentLink ({ attachment, withIcon, apiPath }) {
  const download = () => window.open(`${apiPath}/getFile/${attachment.id}/${encodeNameForUrl(attachment.fileName)}`)

  return <Link className='attachment-link-container' key={attachment.id} onClick={() => download()}>{fileLabel(attachment, withIcon)}</Link>
}
