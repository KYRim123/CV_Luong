import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ChangeTheme } from '../../components/ChangeTheme/ChangeTheme'
import "./navbarStyles.scss"

function Navbar() {
  const [navIndex, setNavIndex] = useState()

  const navList = [
    { to: "/", name: "about"},
    { to: "/resume", name: "resume"},
    { to: "/project", name: "project"},
  ]
  
  useEffect(() => {
    //get vi tri the nav
    const index = JSON.parse(localStorage.getItem("navIndex")) || 0
    setNavIndex(index)

    //nav active
    const navItems = document.querySelectorAll(".nav__item")
    navItems[index].classList.add("active")
  }, [navIndex])

  const handleNavIndex =  (e) => {
    const index = e.target.getAttribute("index")
    setNavIndex(index)
    //gan vi tri nav vao local storage
    localStorage.setItem("navIndex", JSON.stringify(index))
    //remove vitri nav truoc do
    document.querySelectorAll(".nav__item")[navIndex].classList.remove("active")
  }
  return (
    <nav className='nav'>
      <ul className="nav__list">
        {
          navList.map((item, index) => (
            <li key={index} className={`nav__item`}>
              <Link 
                index={index} 
                to={item.to} 
                className='nav__item--link' 
                onClick={handleNavIndex}
              >
                {item.name}
              </Link>
            </li>
          ))
        }
        {/* change theme */}
        <ChangeTheme/>
      </ul>
    </nav>
  )
}

export default Navbar
