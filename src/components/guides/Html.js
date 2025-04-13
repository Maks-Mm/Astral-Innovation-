"use client"
import { useState } from 'react';
import React, { useEffect } from 'react';
import './Html.css'; // Import the CSS file

export default function Html() {
  // Array containing image URLs
  const imageSources = [
    "/html.png",
  ];

  const textToHTML = ` Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance. `


const [screeText, setScreeText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScreeText((prev) => prev + textToHTML[index]);
      if (index >= textToHTML.length - 1) {
        clearInterval(interval);
      } else {
        setIndex((prev) => (prev + 1));
      }
    }, 30);
    return () => clearInterval(interval);
  },[index, textToHTML]);

  return (
    <div className='sub-page'>
      <div className='sub-page-card text-white screen'>
      {screeText} <span className='cursor blinking-text'>_</span>
      </div>
      {/* Use map to render images from the array */}
      {imageSources.map((src, index) => (
        <img key={index} src={src} alt={`img-${index + 1}`} className='sub-page-img' />
      ))}
    </div>
  );
}
