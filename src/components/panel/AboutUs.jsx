// src/components/pages/AboutUs.jsx
import React from "react";
import './AboutUs.css'; // Import the CSS file if you're using separate styles

function AboutUs() {
  return (
    <div className="p-6 min-h-screen flex flex-col items-start space-y-6"> {/* Align items to the left */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-4 glass-effect"> {/* Glass effect for YouTube iframe */}
        {/* Correct YouTube embed link */}
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Ss4JE0I7F8c" // Use embed URL for the video
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 p-4 text-left glass-effect"> {/* Align text to the left */}
        <h1 className="text-4xl font-bold text-blue-500 mb-4">About Us</h1>

        <p className="text-lg text-white max-w-3xl">
          Welcome to our community! We are a leading training platform dedicated
          to helping programmers enhance their skills, boost creativity, and adopt
          new technologies in the ever-evolving world of coding and programming.
        </p>
        <p className="text-lg text-white max-w-3xl mt-4">
          Our mission is to provide innovative solutions and methodologies that
          empower developers at all levels. Whether you are a beginner or an
          experienced coder, you'll find valuable resources and a supportive
          community to grow with.
        </p>
        <p className="text-lg text-white max-w-3xl mt-4">
          Join us today and be part of a network that fosters learning,
          collaboration, and professional growth in the tech industry!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
