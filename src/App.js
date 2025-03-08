import React from "react";
import Galaxy from "./components/Galaxy";
import BackgroundMusic from "./components/BackgroundMusic";
import { Route, Routes } from "react-router-dom";
import Home from "./components/panel/Home";
import Technologies from "./components/panel/Technologies";
import AboutUs from "./components/panel/AboutUs";
import Contacts from "./components/panel/Contacts";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Guides from "./components/guides/Guides";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import { AuthProvider } from "./contexts/authContext";
import Html from "./components/guides/Html";
import JavaScript from "./components/guides/JavaScript";
import Next from "./components/guides/Next";
import ReactPage from "./components/guides/React";

const App = () => {
  return (
    <AuthProvider>
      {" "}
      {/* ✅ Wrap the entire app in AuthProvider */}
      <div
        style={{ position: "relative", overflow: "hidden", height: "100vh" }}
      >
        <Galaxy />
        <NavBar />
        <div className="page">
          <Routes>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/" element={<Home />} />
            <Route path="/guides/*" element={<Guides />}>
              <Route path="" element={<h1>Guides</h1>} />
              <Route path="react" element={<ReactPage />} />
              <Route path="next" element={<Next />} />
              <Route path="html" element={<Html />} />
              <Route path="javaScript" element={<JavaScript />} />
            </Route>
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
        <BackgroundMusic />
      </div>
    </AuthProvider>
  );
};
export default App;
