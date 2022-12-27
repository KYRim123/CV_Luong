import React from 'react'
import './layoutDefaultStyle.scss'


//component 
import Sidebar from '../Sidebar'
import Navbar from '../navbar'

function LayoutDefault({children}) {
  return (
    <article className='container grid wide'>
      <Sidebar />
      <div className='box content'>
        <Navbar />
        <div className="content__container">
          {children}
        </div>
      </div>
    </article>
  )
}

export default LayoutDefault

