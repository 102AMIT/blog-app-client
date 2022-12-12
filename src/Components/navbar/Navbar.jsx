import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    
    <div className='navbar'>
        <div className='topLeft'>
        <div className="topLeftStyle">
        <i className="topIcon fa-brands fa-square-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-spotify"></i>
        </div>
        
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className='topImg'  src="https://w0.peakpx.com/wallpaper/600/322/HD-wallpaper-anime-boy-anime-boy-anime-boys-cute-cute-anime-boy-cute-anime-boys-lonely-sad-anime-boy-sad-anime-boys-thumbnail.jpg" alt="profile-icon" />

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
    
  )
}

export default Navbar