import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { useContext } from "react";
import { Context } from "../context/Context";
const logo=require('../../Assets/Images/profile.jpg')

const Navbar = () => {
  const {user}=useContext(Context);
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
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">ABOUT</Link>

                </li>
                <li className="topListItem">
                <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">WRITE</Link>
                </li>
                <li className="topListItem">
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className='topRight'>
          {
              user ? (<img className='topImg'  src={logo} />) : 
              ( 
                <ul className='topList'>
                  <li className='topListItem'>
                      <Link className="link" to="/login">LOGIN</Link>
                  </li>
                  <li className='topListItem'>
                      <Link className="link" to="/register">REGISTER</Link>
                  </li>
                </ul>
              )
          }
            

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
    
  )
}

export default Navbar