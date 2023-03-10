import React,{useState,useEffect} from 'react'
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [cats,setCats]=useState([]);

  useEffect(() => {
    const getCats=async()=>{
      const res=await axios.get(`${process.env.REACT_APP_API}api/categories`);
      setCats(res.data);
    }
    getCats();
  }, []);

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/5077044/pexels-photo-5077044.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sidebar-image" />

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis maxime deleniti? Autem, voluptates dolor. Laborum dolore beatae molestias quos necessitatibus odit voluptatibus molestiae, exercitationem porro dolor nemo ea vel?</p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c)=>{
              <Link to={`/?cat=${c.name}`} className="link">
                return <li className="sidebarListItem">{c.name}</li>
              </Link>
            })}
            
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">

            <a href="https://github.com/102AMIT"><i className="sidebarIcon fa-brands fa-square-github"></i></a>
            
            <a href="https://www.linkedin.com/in/amit-thakur-ab7685128/"><i className="sidebarIcon fa-brands fa-linkedin"></i></a>
            
            <a href="https://open.spotify.com/"><i className="sidebarIcon fa-brands fa-spotify"></i></a>
            
        </div>
        </div>
    </div>
  )
}

export default Sidebar