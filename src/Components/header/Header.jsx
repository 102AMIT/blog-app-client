import React from 'react'
import './header.css'
const blogImage=require('../../Assets/blogImages/blogimage.jpg')

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm"> WELCOME TO MY BLOG PAGE !!! </span>
            
        </div>
        <img className='headerImg' src={blogImage} alt="blog-image" />
    </div>
  )
}

export default Header