import React, { useRef } from "react";
import "./AboutUs.css";
import Example from "../toAboutUs/Example";

function AboutUs() {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const glass = glowRef.current;
    const rect = glass.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glass.style.setProperty("--mouse-x", `${x}px`);
    glass.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="p-6 min-h-screen flex flex-col md:flex-row items-start md:items-start space-y-6 md:space-y-0 md:space-x-12 about-us-container">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <div
          className="w-full p-6 glass-effect"
          ref={glowRef}
          onMouseMove={handleMouseMove}
        >
          <h1 className="about-us-title mb-6">About Us</h1>

          <div className="w-full mb-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Ss4JE0I7F8c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-left">
            <p className="text-lg text-white max-w-3xl">
              Welcome to Our Global Programming Community!
            </p>
            <p className="text-lg text-white max-w-3xl mt-0.3">
              We are an international team of passionate developers and educators, dedicated
              to helping you understand programming through simple, clear, and effective steps.
            </p>
            <p className="text-lg text-white max-w-3xl mt-0.3">
              Our platform is designed to support programmers of all levels—from beginners
              taking their first steps to experienced coders exploring new technologies.
              We focus on simplifying complex concepts, boosting creativity, and guiding you
              through the ever-evolving world of software development.
            </p>
            <p className="text-lg text-white max-w-3xl mt-0.3">
              Join us today and become part of a vibrant, supportive network that values
              learning, collaboration, and growth in the tech industry!
            </p>
            </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/4 lg:w-1/2">
        <Example />
      </div>
    </div>
  );
}

export default AboutUs;