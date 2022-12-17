import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact us</h1>
            <form action="">
                <h1 style={{marginLeft:"120px"}}>THIS IS DEMO FOR NOW</h1>
                <div className='inputarea'>
                    <label>Name</label>
                    <input type="text" required placeholder='Your name'/>
                </div>
                <div className='inputarea'>
                    <label>Email</label>
                    <input type="Email" required placeholder='Abc@xyz.com'/>
                </div>
                <div className='inputarea'>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about your query...'/>
                </div>
                <button type='submit' className='btn'>Send</button>
            </form>
        </main>


    </div>
  )
}

export default Contact