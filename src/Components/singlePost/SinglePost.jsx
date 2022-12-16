import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import './singlePost.css';
const SinglePost = () => {
    const location=useLocation();
    // getting the id
    const path=location.pathname.split("/")[2];
    const [post,setPost]=useState({});
    useEffect(() => {
        const getPost=async ()=>{
            const res=await axios.get("http://localhost:8000/api/posts/"+path);
            setPost(res.data)
        };
        getPost();
    }, [path]);
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
        {post.photo &&(
            <img className='singlePostImg' src={post.photo} alt="single-page-image" />
            )} 
            
            <h1 className="singlePostTitle">{post.title} 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Auther: <b>{post.username}</b></span>
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>{post.desc}</p>
        </div>
    </div>
  )
}

export default SinglePost