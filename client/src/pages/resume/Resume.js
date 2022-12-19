import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-regular-svg-icons"
import { faCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons"

import './resumeStyle.scss'

function Resume() {
  const language = [
    {name: "html", icon: ""},
    {name: "css", icon: ""},
    {name: "scss", icon: ""},
    {name: "javascript", icon: ""},
  ]
  const framework = [
    {name: "reactjs", icon: ""},
    {name: "redux", icon: ""},
    {name: "redux-toolkit", icon: ""},
  ]
  const other = [
    {name: "figma to reactjs", icon: ""},
    {name: "responsive(mobile, tablet, pc)", icon: ""},
  
  ]



  return (
    <div className="resume page__container">  
      <div>
        <h3 className="title">Resume</h3>
        <span className='line'></span>
      </div>
      
      <div className='education__container'>
        <h3 className="education__title title">
          <div className="box--icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          education
        </h3>

        <div className="timeLine__item borderLeft">
          <div className="timeLine__title">School of Computer Science - Duy Tan University</div>
          <span className="timeLine__period">2019-2023</span>
          <p className='education__description'>
          currently a final year student
          </p>
        </div>

      </div>

      <div className='skills__container'>
        <h3 className="skills__title title">
          <div className="box--icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          my skills
        </h3>

        <div className="language__container borderLeft">
          <h3 className="">language</h3>
          <ul className="language__list">
            {
              language.map((item, index) => (
                <li key={index} className="language__item">
                  <span>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="framework__container borderLeft">
          <h3 className="">framework</h3>
          <ul className="framework__list">
            {
              framework.map((item, index) => (
                <li key={index} className="framework__item">
                  <span>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="other__container borderLeft">
          <h3 className="">other</h3>
          <ul className="other__list">
            {
              other.map((item, index) => (
                <li key={index} className="other__item">
                  <span>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>

      </div>

      

    
      


    </div>
  )
}
export default Resume