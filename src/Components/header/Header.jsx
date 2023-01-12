import React from 'react'
import './header.css'
const blogImage=require('../../Assets/blogImages/blog_image.jpg')

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <h2 className="headerTitleSm"> WELCOME TO MY BLOG PAGE !!! </h2>    
        </div>
        <img className='headerImg' src={blogImage} alt="blog-image" />
    </div>
  )
}

export default Header