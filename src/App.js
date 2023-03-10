import Home from "./Components/pages/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Single from "./Components/pages/single/Single";
import Write from "./Components/pages/write/Write";
import Settings from "./Components/pages/settings/Settings";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Components/context/Context";
import Contact from "./Components/pages/contact/Contact";
import About from "./Components/pages/about/About";

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={user ? <Home/> : <Register/>} />
            <Route path='/login' element={user ? <Home/> : <Login/>} />
            <Route path='/settings' element={user ? <Settings/> : <Register/>} />
            <Route path='/write' element={user ? <Write/> : <Register/>} />
            <Route path='/post/:postId' element={<Single/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
