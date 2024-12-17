import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AirbnbYourRoom from "./pages/AirbnbYourRoom";
import Signup from './components/Signup'
import Login from './components/Login'
import HotelPage from "./pages/HotelPage";

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const handleLogin = () =>{
    setIsLogged(true)
  }
  const handleLogout = () =>{
    setIsLogged(false)
  }
  return (
    <div className="App bg-white">
      <Router>
        <Navbar isLogged={isLogged} onLogout={handleLogout}/>
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/airbnbYourRoom' element={<AirbnbYourRoom />}/>
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
            <Route path="hotels/:hotelID" element={<HotelPage />}/>
          </Routes>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
