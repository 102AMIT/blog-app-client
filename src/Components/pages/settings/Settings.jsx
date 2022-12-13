import React from 'react'
import Sidebar from '../../sidebar/Sidebar';
import './settings.css';

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label >Profile Picture</label>
            <div className='settingsPP'>
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="profile-image" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user-tie"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
            </div>
          <label >Username</label>
          <input type="text" placeholder='Enter Your Name..' />
          <label >Email</label>
          <input type="email" placeholder='abc@gmail.com' />
          <label >Password</label>
          <input type="password" />
          <button className='settingsSubmit'>Update</button>
        </form>

      </div>
      <Sidebar />
    </div>
  )
}

export default Settings