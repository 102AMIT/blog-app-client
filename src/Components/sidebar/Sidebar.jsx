import React from 'react'
import './sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/5077044/pexels-photo-5077044.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sidebar-image" />

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis maxime deleniti? Autem, voluptates dolor. Laborum dolore beatae molestias quos necessitatibus odit voluptatibus molestiae, exercitationem porro dolor nemo ea vel?</p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Coding</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Movies</li>
            <li className="sidebarListItem">Tech</li>

        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-github"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-spotify"></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar