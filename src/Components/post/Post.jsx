import React from 'react'
import './post.css';

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg' src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" alt="-post-image" />
    
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
      </div>
      <span className="postTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad architecto reiciendis labore velit voluptatem rerum fugiat optio, nam, quaerat odit vel error? Illo aliquid iusto a sed nesciunt.</span>
      <hr/>
      <span className="postDate">1 hour ago</span>

    </div>

    <p className='postDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur magnam esse temporibus dignissimos facilis debitis dolorem sed nobis voluptatum sunt. Doloribus, repellendus. Sit officiis incidunt saepe dolorum inventore. Explicabo, eaque?</p>

    </div>
  )
}

export default Post