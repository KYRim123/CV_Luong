import React from 'react'
import './aboutStyle.scss'


function About() {
  return (
    <div className='about page__container'>
      <div className="about__container">
        <div>
          <h3 className="about__title title">About Me</h3>
          <span className='line'></span>
          <p className="about__description">
            As a final year college student, 
            I have a passion for web interface design with my skills with passion and meticulousness 
            to create beautiful and easy-to-use websites.
          </p>
        </div>

        <div className='goals'>
          <h3 className="title">Future goals</h3>
          <p className="goals__description">
            In 3 to 5 years I want to be a full-stack developer
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
