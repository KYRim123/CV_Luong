import React from 'react'

import avatar from '../../assets/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faMobileScreenButton, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

import "./sidebarStyles.scss"

import icons from '../../assets/icons'

function Sidebar() {
    const contact = [
        { icon: faEnvelope, name: 'Email', nameLink: 'luong7002351@gmail.com', href: 'mailto:luong7002351@gmail.com' },
        { icon: faMobileScreenButton, name: 'Phone', nameLink: '+84: 397002351', href: 'tel:0397002351' },
        { icon: faCalendar, name: 'Birthday', nameLink: 'January 16 2001', href: '/' },
        { icon: faMapLocationDot, name: 'Location', nameLink: 'Quang Nam, Viet Nam', href: '/' },
    ]
    return (
        <aside className='sidebar box'>
            <div className="sidebar--container grid">
                <div className="sidebar__infor">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="name">
                        <h3 className='title'>Nguyen Thanh Luong</h3>
                        <div>front end developer</div>
                    </div>
                </div>

                <div className="sidebar__infor--additional">
                    <ul className="deatails--infor">
                        {
                            contact.map((item, index) => (
                                <li key={index} className="deatails--infor__item">
                                    <span className='item__icon box--icon'>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </span>
                                    <div className="infor--contacts">
                                        <span>{item.name}</span>
                                        <a href={item.href}>{item.nameLink}</a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="socialMedia">
                        <a href="">
                            <img src={icons.facebook} alt="facebook"  className='icon'/>
                        </a>
                        <a href="">
                            <img src={icons.instagram} alt="facebook"  className='icon'/>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
