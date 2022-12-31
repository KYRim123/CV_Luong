import React from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./closeContentStyle.scss"

function CloseContent() {
    const showContent = () => {
        document.querySelector(".content").classList.remove("active")
    }
  return (
    <div className='closeContent buttonIcon' onClick={showContent}>
      <FontAwesomeIcon icon={faClose}/>
    </div>
  )
}

export default CloseContent
