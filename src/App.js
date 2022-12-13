import Home from "./Components/pages/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Single from "./Components/pages/single/Single";
import Write from "./Components/pages/write/Write";
import Settings from "./Components/pages/settings/Settings";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Register />
    </div>
  );
}

export default App;
