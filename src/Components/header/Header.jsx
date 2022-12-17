import React from 'react'
import './header.css'
const blogImage=require('../../Assets/blogImages/blogimage.jpg')

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm"><img src="https://i.pinimg.com/originals/74/b9/7f/74b97fc94c3fb519384461a3046e2e4a.gif" alt="gif-image" /> WELCOME TO MY BLOG PAGE !!! <img src="https://i.pinimg.com/originals/74/b9/7f/74b97fc94c3fb519384461a3046e2e4a.gif" alt="gif-image" /></span>
            
        </div>
        <img className='headerImg' src={blogImage} alt="blog-image" />
    </div>
  )
}

export default Header