import React, { useRef, useEffect, useState } from "react";
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

  // Typing effect states
  const paragraphs = [
    "Welcome to Our Global Programming Community!",
    "We are an international team of passionate developers and educators, dedicated to helping you understand programming through simple, clear, and effective steps.",
    "Our platform is designed to support programmers of all levels—from beginners taking their first steps to experienced coders exploring new technologies. We focus on simplifying complex concepts, boosting creativity, and guiding you through the ever-evolving world of software development.",
    "Join us today and become part of a vibrant, supportive network that values learning, collaboration, and growth in the tech industry!"
  ];

  const [typedText, setTypedText] = useState(["", "", "", ""]);
  const [paraIndex, setParaIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (paraIndex >= paragraphs.length) return;

    const interval = setInterval(() => {
      const currentText = paragraphs[paraIndex];
      setTypedText((prev) => {
        const newText = [...prev];
        newText[paraIndex] += currentText[charIndex];
        return newText;
      });

      if (charIndex >= paragraphs[paraIndex].length - 1) {
        setCharIndex(0);
        setParaIndex((prev) => prev + 1);
      } else {
        setCharIndex((prev) => prev + 1);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [charIndex, paraIndex, paragraphs]);

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
            {typedText.map((line, index) => (
              <p key={index} className="text-lg text-white max-w-3xl mt-0.3">
                {line}
                {index === paraIndex && <span className="cursor blinking-text">_</span>}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/2">
        <Example />
      </div>
    </div>
  );
}

export default AboutUs;
