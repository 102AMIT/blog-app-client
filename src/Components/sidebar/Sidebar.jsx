import React,{useState,useEffect} from 'react'
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [cats,setCats]=useState([]);

  useEffect(() => {
    const getCats=async()=>{
      const res=await axios.get("http://localhost:8000/api/categories");
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
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-github"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-spotify"></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar