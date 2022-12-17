import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./navbarStyles.scss"

function Navbar() {
  const [navIndex, setNavIndex] = useState(0)

  const navList = [
    { to: "/", name: "about"},
    { to: "/resume", name: "resume"},
    { to: "/project", name: "project"},
    { to: "/", name: "contact"},
  ]

  return (
    <nav className='nav'>
      <ul className="nav__list">
        {
          navList.map((item, index) => (
            <li key={index} className={`nav__item ${navIndex === index ? 'active':''}`}>
              <Link index={index} to={item.to} className='nav__item--link' onClick={() => {setNavIndex(index)}}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
