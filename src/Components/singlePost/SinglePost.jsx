import React from 'react'
import './singlePost.css';
const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png" alt="single-page-image" />
            <h1 className="singlePostTotle">Lorem ipsum dolor sit  
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Auther: <b>Amit</b></span>
                <span className='singlePostDate'>1 Hour Ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo iste optio voluptas! Natus odio consequuntur eligendi blanditiis veritatis officia explicabo porro placeat culpa suscipit, repellat, aspernatur magnam illum quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, necessitatibus. Autem in soluta consequuntur! Fuga architecto quod cupiditate omnis maiores culpa ex, in eum optio, quidem ipsa porro pariatur quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi repudiandae aspernatur distinctio quidem numquam deleniti nam voluptates sit minus velit voluptas est, iure expedita harum. Quis possimus facilis dolorum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia odio, molestias beatae quidem quasi sequi, exercitationem ducimus totam corrupti consequuntur commodi nisi! Eius dolores rem architecto fugiat sunt aperiam? Nulla.</p>
        </div>
    </div>
  )
}

export default SinglePost