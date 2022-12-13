import React from 'react'
import './layoutDefaultStyle.scss'


//component 
import Sidebar from '../../components/Sidebar'

function LayoutDefault({children}) {
  return (
    <article className='container grid wide'>
      <Sidebar />
      {children}
    </article>
  )
}

export default LayoutDefault

