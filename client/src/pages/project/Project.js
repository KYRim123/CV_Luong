import React from 'react'
import "./projectStyle.scss"
import { imagePage } from "../../assets/image"


function Project() {
    const listProject = [
        { name: "travel", image: imagePage.travel, link: "https://travel-luong.netlify.app/" },
        { name: "sushi", image: imagePage.sushi, link: "https://sushi-luong.netlify.app/" },
        { name: "band", image: imagePage.band, link: "https://kyrim123.github.io/w3-band/" },
        { name: "store folower", image: imagePage.storeFolower, link: "https://store-folowers.netlify.app/" },
    ]
    return (
        <div className='project page__container'>
            <h3 className="title">project</h3>
            <span className="line"></span>
            <div className="project__container">
                <ul className="project__list grid">
                    {
                        listProject.map((item, index) => (
                            <li key={index} className="project__item">
                                <a target="_blank" href={item.link}>
                                    <img src={item.image} alt={item.name} />
                                </a>
                                <h3>{item.name}</h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Project
