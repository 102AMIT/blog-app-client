import {useState,useEffect} from 'react'
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import './home.css';
import axios from "axios";


const Home = () => {
  const [posts,setPosts]=useState([]);

  useEffect(() => {
    const fetchPosts=async ()=>{
      const res=await axios.get("http://localhost:8000/api/posts");
      setPosts(res.data);
    }
    fetchPosts();
  }, []);
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