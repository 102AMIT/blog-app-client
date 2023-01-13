import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { Context } from "../context/Context";


const Navbar = () => {
  const {user,dispatch}=useContext(Context);
  const PF=`${process.env.REACT_APP_API}images/`;


  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  }
  return (
    
    <div className='navbar'>
        <div className='topLeft'>
        <div className="topLeftStyle">
        
        <a href="https://github.com/102AMIT"><i className="topIcon fa-brands fa-square-github"></i></a>

        <a href="https://www.linkedin.com/in/amit-thakur-ab7685128/"><i className="topIcon fa-brands fa-linkedin"></i></a>
        
        <a href="https://open.spotify.com/"><i className="topIcon fa-brands fa-spotify"></i></a>

        </div>
        
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/about">ABOUT</Link>

                </li>
                <li className="topListItem">
                <Link className="link" to="/contact">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className='topRight'>

          {
              user ? (
                <Link to="/settings">
                <img className='topImg'  src={PF+user.profilePic} />
                </Link>
                ) : ( 
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
            

        </div>

    </div>
    
  )
}

export default Navbar