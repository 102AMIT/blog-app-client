import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import Sidebar from '../../sidebar/Sidebar';
import './settings.css';

const Settings = () => {
  const [file,setFile]=useState(null);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [success,setSuccess]=useState("");
  const {user ,dispatch}=useContext(Context);
  const PF="http://localhost:8000/images/";


  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser={
      userId:user._id,
      username,email,password
    }
    // we need here file first that why first we need to check 
    if(file){
      const data=new FormData();
      // if we are don't do that then user can upload same name but different image so we need to check that 
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      updatedUser.profilePic=filename;

      try{
        await axios.post("http://localhost:8000/api/upload",data);

      }catch(err){
        console.log(err);
      }
    }
    try{
      
      const res=await axios.put("http://localhost:8000/api/user/" + user._id,updatedUser);
      setSuccess(true)
      dispatch({type:"UPDATE_SUCCESS",payload:res.data})

    }catch(err){
      dispatch({type:"UPDATE_FAILURE"})

    }
  }
  console.log(username);
  console.log(email);
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label >Profile Picture</label>
            <div className='settingsPP'>
                <img src={ file ? URL.createObjectURL(file): PF+ user.profilePic} />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user-tie"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
            </div>
          <label >Username</label>
          <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} />
          <label >Email</label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} />
          <label >Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button className='settingsSubmit' type='submit'>Update</button>

          {success && <span style={{color:"green" ,textAlign:"center",marginTop:"20px"}}>Profile has been updated...</span>}
        </form>

      </div>
      <Sidebar />
    </div>
  )
}

export default Settings