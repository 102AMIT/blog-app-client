import React from 'react'
import './posts.css'
import Post from '../post/Post'
const Posts = ({posts}) => {
  // console.log(posts,"hello");
  return (
    
    <div className='posts'>
      {posts.map(post=>{
        return <Post post={post}/>
      })}
    </div>
  )
}

export default Posts;