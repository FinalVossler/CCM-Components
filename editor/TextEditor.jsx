import React from 'react'
import CkeditorV4, { wrapContent } from './CkeditorV4'

import './TextEditor.scss'

const TextEditor = React.forwardRef(({ isPrinting, ...props }, ref) => {
  return <>
    {
      !isPrinting && <CkeditorV4 ref={ref} {...props} />
    }
    { isPrinting && <div><div className='print' dangerouslySetInnerHTML={{ __html: props.data }} /></div> }
  </>
})

export { wrapContent }

export default TextEditor
