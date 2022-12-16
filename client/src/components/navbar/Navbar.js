import React from 'react'
import "./navbarStyles.scss"

function Navbar() {
  return (
    <nav className='nav'>
      <ul className="nav__list">
        <li className="nav__item active">about</li>
        <li className="nav__item">resume</li>
        <li className="nav__item">Portfolio</li>
        <li className="nav__item">contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
