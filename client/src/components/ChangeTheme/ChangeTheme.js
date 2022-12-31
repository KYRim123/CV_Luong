import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import "./themeStyles.scss"

export function ChangeTheme() {
  const [iconTheme, setIconTheme] = useState(faMoon)
  const [reload, setReload] = useState(true)

  useEffect(() => {
    const themeLocal = JSON.parse(localStorage.getItem("select-theme")) || iconTheme
    setIconTheme(themeLocal)
    themeLocal.iconName === "moon" ? document.body.classList.add("lightTheme"):
    document.body.classList.remove("lightTheme")
  }, [reload])

  const handleChangeTheme =() => {
    let currentIcon;  
    iconTheme.iconName === "moon" ? currentIcon = faSun : currentIcon = faMoon
    localStorage.setItem("select-theme", JSON.stringify(currentIcon))
    setReload(!reload)
  }
  return (
    <div className='changeTheme buttonIcon' onClick={handleChangeTheme}>
      <FontAwesomeIcon icon={iconTheme} />
    </div>
  )
}


