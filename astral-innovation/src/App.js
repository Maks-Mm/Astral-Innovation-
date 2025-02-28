// src/App.jsx
import React from "react";
import Galaxy from "./components/Galaxy";
import BackgroundMusic from "./components/BackgroundMusic";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import UserPanel from "./components/pages/UserPanel";
import AboutUs from "./components/pages/AboutUs";
import Contacts from "./components/pages/Contacts";
//import Navigation from "./components/Navigation"; // If you have a separate Navigation component
import NavBar from "./components/Navbar"; // Ensure this imports correctly

const App = () => {
  return (
    //  <Navigation /> {/* Optional: Use this if you have a different navigation component */}
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <Galaxy />
      <NavBar /> {/* Ensure NavBar is rendered */}
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        <Route path="/UserPanel" element={<UserPanel />} />
      </Routes>
      <BackgroundMusic />
    </div>
  );
};

export default App;
