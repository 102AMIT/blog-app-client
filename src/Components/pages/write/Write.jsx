import React from 'react'
import './write.css'

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src="https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg" alt="write-image" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                
                <input type="file" id="fileInput" />
                <input type="text" placeholder='Title....' className='writeInput' autoFocus={true} />
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell About Your Post...' type="text" className='writeInput writeText' ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write