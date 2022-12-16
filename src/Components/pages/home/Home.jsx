import {useState,useEffect} from 'react'
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import './home.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';


const Home = () => {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();

  useEffect(() => {
    const fetchPosts=async ()=>{
      const res=await axios.get("http://localhost:8000/api/posts"+search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search]);
  return (
    <>
    <Header />
    <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
    </div>
    </>
  )
}

export default Home