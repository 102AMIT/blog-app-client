import React from 'react'
import './single.css';
import SinglePost from '../../singlePost/SinglePost';
import Sidebar from "../../sidebar/Sidebar"
const Single = () => {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}

export default Single