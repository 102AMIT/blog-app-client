import axios from 'axios';
import React,{useContext, useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../context/Context';
import './singlePost.css';



const SinglePost = () => {
    const location=useLocation();
    // getting the id
    const path=location.pathname.split("/")[2];
    const [post,setPost]=useState({});
    const PF="http://localhost:8000/images/";
    const {user}=useContext(Context)


    useEffect(() => {
        const getPost=async ()=>{
            const res=await axios.get("http://localhost:8000/api/posts/"+path);
            setPost(res.data)
        };
        getPost();
    }, [path]);

    const handleDelete=async()=>{
        try{
            await axios.delete(`http://localhost:8000/api/posts/${post._id}`,{data:{username:user.username}});
            window.location.replace("/");

        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
        {post.photo &&(
            <img className='singlePostImg' src={PF + post.photo} alt="single-page-image" />
            )} 
            
            <h1 className="singlePostTitle">{post.title} 
            {post.username===user?.username &&
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                </div>
            }
                
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                Auther: 
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>{post.desc}</p>
        </div>
    </div>
  )
}

export default SinglePost