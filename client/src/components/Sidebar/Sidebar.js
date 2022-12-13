import React from 'react'


import "./sidebarStyles.scss"

function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className="sidebar--container">
        <div className="sidebar__infor">
            <div className="avatar">
                <img src="" alt="avatar" />
            </div>
            <div className="name">
                <h3>Nguyen Thanh Luong</h3>
                <div>front end developer</div>
            </div>
        </div>
        
        <div className="sidebar__infor--additional">
            <ul className="deatails--infor">
                <li className="deatails--infor__item">
                    <span>
                        icon
                    </span>
                    <div className="infor--contacts">
                        <span>email</span>
                        <a href="mailto:luong7002351@gmail.com">luong7002351@gmail.com</a>
                    </div>
                </li>
            </ul>
            <div className="socialMedia">
                facebook
            </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
