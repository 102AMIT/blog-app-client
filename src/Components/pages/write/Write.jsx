import React, { useContext } from 'react'
import { useState } from 'react'
import './write.css'
import axios from "axios";
import { Context } from '../../context/Context';
const Write = () => {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setFile]=useState(null);
  const {user}=useContext(Context)
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc,
    }
    // we need here file first that why first we need to check 
    if(file){
      const data=new FormData();
      // if we are don't do that then user can upload same name but different image so we need to check that 
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo=filename;

      try{
        await axios.post("http://localhost:8000/api/upload",data);

      }catch(err){
        console.log(err);
      }
    }
    try{
      console.log("hello");
      const res=await axios.post("http://localhost:8000/api/posts/",newPost);
      window.location.replace("/post/"+res.data._id);

    }catch(err){
      console.log(err,);
    }
  }

  return (
    <div className='write'>
      {file &&(

        /* basically it's gona create a url for file we are passing in */
        <img className='writeImg' src={URL.createObjectURL(file)} alt="write-image" />

      )}
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                
                <input type="file" id="fileInput" onChange={e=>setFile(e.target.files[0])}/>
                <input type="text" placeholder='Title....' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell About Your Post...' type="text" className='writeInput writeText'onChange={e=>setDesc(e.target.value)} ></textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  )
}

export default Write;