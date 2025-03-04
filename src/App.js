import React from "react";
import Galaxy from "./components/Galaxy";
import BackgroundMusic from "./components/BackgroundMusic";
import { Route, Routes } from "react-router-dom";
import Home from "./components/panel/Home";
import Technologies from "./components/panel/Technologies";
import AboutUs from "./components/panel/AboutUs";
import Contacts from "./components/panel/Contacts";
import NavBar from "./components/navbar/Navbar"; // Ensure this imports correctly
import Footer from "./components/footer/Footer";
//import Search from "./components/Search"; // Import the Search component
import Guides from "./components/guides/Guides";
import SignUp from "./components/register/SignUp";

const App = () => {
  return (
    //  <Search /> {/* Place the Search component here */}
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <Galaxy />
      <NavBar />
      {/* Define the routes for your application */}
      <div className="page">
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />

          <Route path="/guides/*" element={<Guides />}>
            <Route path="" element={<h1>Guides</h1>} />
            <Route path="react" element={<h1>React</h1>} />
            <Route path="next" element={<h1>Next</h1>} />
            <Route path="html" element={<h1>HTML</h1>} />
            <Route path="javaScript" element={<h1>JavaScript</h1>} />
          </Route>

          <Route path="/technologies" element={<Technologies />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
      <Footer /> {/* Render Footer on every page */}
      <BackgroundMusic />
    </div>
  );
};

export default App;
