import scrollreveal from "scrollreveal"
import './layoutDefaultStyle.scss'
//component 
import Sidebar from '../Sidebar'
import Navbar from '../navbar'
import { useEffect } from 'react'

function LayoutDefault({children}) {
  useEffect(() => {
    const sr = scrollreveal({
      duration: 2500,
      distance: '60px'
    })

    sr.reveal(".sidebar", {origin: 'left'})
    sr.reveal(".content", {origin: 'right'})
    sr.reveal(".deatails--infor__item", {origin: 'left', interval: 100})
    sr.reveal(".project__item", {origin: 'right', interval: 100})

  }, [])
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

