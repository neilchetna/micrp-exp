import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Componetns/LandingPage/LandingPage";
import ParticlaAni from "./Componetns/ParticlaAni";
import Login from "./Componetns/Signup/Login";
import Signup from "./Componetns/Signup/Signup";
import About from "./Componetns/About/About";
import Dashboard from "./Componetns/Home/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <ParticlaAni />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
