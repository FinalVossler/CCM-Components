import React from 'react'
import { fade, decomposeColor } from '@material-ui/core/styles/colorManipulator'
import { makeStyles, Chip } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import AttachmentLink from './AttachmentLink'
import InMemoryAttachment from './InMemoryAttachment'
import classnames from 'classnames'
import { doNothing } from 'app/tools/utils'

import './AttachmentChipList.scss'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
    borderColor: 'transparent',
    '&:hover': {
      borderColor: theme.palette.primary.main
    },
    backgroundColor: applyAlpha(theme.palette.primary.main, theme.palette.action.selected)
  }
}))

const applyAlpha = (color1, color2) => {
  return fade(color1, decomposeColor(color2).values[3])
}

function AttachmentChipList ({ value, onChange, onFileChange, disabled, apiPath }) {
  const classes = useStyles()

  const handleDelete = (fileToDelete) => {
    const files = [...value]
    const fileIndex = files.indexOf(fileToDelete)
    files.splice(fileIndex, 1)
    if (onChange) {
      onChange(files)
    } else {
      onFileChange(files)
    }
  }

  return (
    <span className='AttachmentChipList'>
      {(value || []).filter(f => !f.isEmbeddedImage).map((file, index) => (
        <Chip key={file.key ?? index} icon={<AttachFileIcon fontSize='small' />} label={file.id ? <AttachmentLink attachment={file} apiPath={apiPath} /> : <InMemoryAttachment attachment={file} />} onDelete={() => handleDelete(file)}
          classes={classes}
          className={classnames('attachement-chip', { disabled: disabled })}
          color='primary'
          variant='outlined'
        />
      ))}
    </span>
  )
}

AttachmentChipList.defaultProps = {
  onChange: doNothing,
  onFileChange: doNothing
}

export default AttachmentChipList
