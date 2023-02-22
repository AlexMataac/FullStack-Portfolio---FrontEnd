import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Project from "./components/Project";
import AddEmployee from "./components/AddEmployee";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

  const [showCard, setShowCard] = useState(false) 

  const load = () => {
    setShowCard(true)
  }
  return (
    <>
    <Navbar/>
      <Routes>
    <Route path="/my-portfolio" element={<Home/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/aboutme" element={<AboutMe/>} />
    <Route path="/resume" element={<Resume/>} />
    <Route path="/experience" element={<Experience/>} />
    <Route path="/project" element={<Project load={load}/>}/>
    <Route path="/contactme" element={<Contact/>} />
    <Route path="/addemployee" element={<AddEmployee/>} />

    
    </Routes>
    <Footer />
    {/* {showCard && <AddEmployee />} */}
    <SocialLinks />
    </>
  );
}

export default App;
