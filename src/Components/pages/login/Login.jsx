import React,{useContext, useRef}from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'
import './login.css'
const Login = () => {
  const userRef=useRef();
  const passwordRef=useRef();
  const {dispatch,isFecthing}=useContext(Context);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res=await axios.post(`${process.env.REACT_APP_API}api/auth/login`,{

        username:userRef.current.value,
        password:passwordRef.current.value,
      })
      console.log(res);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  }
  
  return (
    <div className='login'>
            <span className="loginTitle">Login</span>
        <form className='loginForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className='loginInput' placeholder='Enter Your Username..' ref={userRef} required/>
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter Your Password..'ref={passwordRef} required />
            <button className='loginButton' type="submit" disabled={isFecthing}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className='link' to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default Login