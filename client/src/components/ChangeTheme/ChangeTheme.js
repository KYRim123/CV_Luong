import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMoon, faSun} from "@fortawesome/free-solid-svg-icons"
import "./themeStyles.scss"

export function ChangeTheme() {
    const [iconTheme, setIconTheme] = useState(faSun)
  
    useEffect(() => {
      iconTheme !== faSun ? document.body.classList.add("lightTheme") : document.body.classList.remove("lightTheme")
    }, [iconTheme])

    const handleChangeTheme = () => {
      iconTheme === faSun ? setIconTheme(faMoon):setIconTheme(faSun)
    }
    
    return (
        <div className='changeTheme' onClick={handleChangeTheme}>
          <FontAwesomeIcon icon={iconTheme}/>
        </div>
      )
}


