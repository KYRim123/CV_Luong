import React from 'react'
import './layoutDefaultStyle.scss'

function LayoutDefault({children}) {
  return (
    <div>
      header
      {children}
      footer
    </div>
  )
}

export default LayoutDefault

