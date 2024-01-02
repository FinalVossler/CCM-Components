import React from 'react'
import { useTranslation } from 'react-i18next'
import WarningIcon from '@material-ui/icons/WarningRounded'
import { useDraggable } from '@dnd-kit/core'
import PanTool from '@material-ui/icons/PanTool'
import Tooltip from '@material-ui/core/Tooltip'

import FormReader from 'app/core/components/form/FormReader'
import AttachmentLink from './AttachmentLink'
import LinkButton from 'app/core/components/button/LinkButton'
import FormikLiasseMailDialog from 'app/components/request/dialog/FormikLiasseMailDialog'
import useMailAction from 'app/store/mail/actions'

import LabelKeys from 'referential/label'
import { timestamp } from 'app/core/Query'

import './AttachmentReadList.scss'

export const LIASSE_ACCEPTABLE_CONTENT_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf', 'image/tiff']

export default function AttachmentReadList ({ mail, containerId, attachments, apiPath, attachmentsMissing = false, attachmentsPendingLoad = false, onCloseMail, draggable }) {
  const attachmentNonEmbedded = attachments && attachments.filter(x => !x.isEmbeddedImage)
  const hasAttachment = attachments && attachmentNonEmbedded.length > 0

  const { t } = useTranslation()

  if (!hasAttachment && !attachmentsMissing) {
    return null
  }

  const toolTipContent = () => {
    return (
        <>
          {attachmentsPendingLoad && <p>{t(LabelKeys.ihm.mail_attachments_warning_tooltip_3)}</p>}
          {attachmentsMissing && !attachmentsPendingLoad &&
          <>
            <p>{t(LabelKeys.ihm.mail_attachments_warning_tooltip_1)}</p>
            <p>{t(LabelKeys.ihm.mail_attachments_warning_tooltip_2)}</p>
          </>}
      </>
    )
  }

  const disabledLiasseButton = React.useMemo(() => {
    return mail && mail?.attachments && !mail.attachments.some(att => LIASSE_ACCEPTABLE_CONTENT_TYPES.indexOf(att.contentType) !== -1)
  }, [mail])

  return <FormReader labelKey={LabelKeys.ihm.mail_attachments} labelWidth={150}>

    <div>
      {attachmentNonEmbedded.map(attachment => {
        return (
          <DraggableAttachmentLink apiPath={apiPath} attachment={attachment} mail={mail} key={attachment.id} draggable={draggable} />
        )
      })}
    </div>

    {attachmentsMissing &&
      <Tooltip title={toolTipContent()}>
        <div className='missingAttachment-box'>
          <WarningIcon color='error' className='missingAttachment-icon' />{t(LabelKeys.ihm.mail_attachments_warning)}
        </div>
      </Tooltip>
    }

    {attachments.filter(attachment => !attachment.isEmbeddedImage).length > 0 &&
      <div className='downloadAllAttachments-container'>
        <LinkButton
          className='downloadAllAttachments-zipButton'
          target='_blank'
          to={`${apiPath}/getAttachmentsZip/${containerId}?t=${timestamp()}`}
        >
          {t(LabelKeys.ihm.mail_attachments_download_all)}
        </LinkButton>
      </div>
    }

    {mail && mail?.attachments && mail?.genericEmailAddress?.liasseEnabled && (
      <FormikLiasseMailDialog onCloseMail={onCloseMail} disabled={disabledLiasseButton} requestId={mail.requestId} attachments={mail.attachments} />
    )}
  </FormReader>
}

const DraggableAttachmentLink = ({ apiPath, attachment, mail, draggable }) => {
  const id = React.useMemo(() => {
    return ({
      attachment,
      mailId: mail?.id
    })
  }, [attachment, mail?.id])

  const { dispatchSetDragAttachmentInfo } = useMailAction()
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id
  })

  React.useEffect(() => {
    dispatchSetDragAttachmentInfo({ isDragging, mailId: mail?.id })
  }, [isDragging])

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
  } : undefined

  return (
    <div ref={setNodeRef} className='draggableAttachment' key={id} style={style}>
      <AttachmentLink apiPath={apiPath} attachment={attachment} withIcon />
      {draggable && <PanTool {...listeners} {...attributes} color='primary' className='attachmentDragTool' />}
    </div>
  )
}
