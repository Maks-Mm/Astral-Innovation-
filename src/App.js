// src/App.jsx
import React from "react";
import Galaxy from "./components/Galaxy";
import BackgroundMusic from "./components/BackgroundMusic";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Technologies from "./components/pages/Technologies";
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
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        <Route path="/Technologies" element={<Technologies />} />
      </Routes>
      <BackgroundMusic />
    </div>
  );
};

export default App;
