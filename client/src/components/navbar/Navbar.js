import React from 'react'
import {Link} from "react-router-dom"
import "./navbarStyles.scss"

function Navbar() {
  return (
    <nav className='nav'>
      <ul className="nav__list">
        <li className="nav__item active">
          <Link to="/"  className='nav__item--link'>about </Link>
        </li>
        <li className="nav__item">
          <Link to="/resume" className='nav__item--link'>resume </Link>
          </li>
        <li className="nav__item">
          <Link to="/" className='nav__item--link'>projects </Link>
          </li>
        <li className="nav__item">
          <Link to="/" className='nav__item--link'>contact </Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
