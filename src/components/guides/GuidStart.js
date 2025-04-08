import React, { useEffect, useState } from 'react';
import './GuidStart.css'; // Import the CSS file

export default function GuidStart() {
  // Array containing image objects with src and link
  const imageSources = [
    {
      src: "https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png",
      link: "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/What_is_JavaScript"
    },
    {
      src: "/icons8-nuxt-js-48.png", // Correct path
      link: "https://en.wikipedia.org/wiki/Nuxt"
    },
    {
      src: "/icons8-express-js-64.png", // Correct path
      link: "https://www.codecademy.com/article/what-is-express-js",
    },
    {
      src: "/icons8-adonis-js-48.png", // Correct path
      link: "https://dev.to/tngeene/introduction-to-adonisjs-4a1f",
    },
    {
      src: "/icons8-nodejs-48.png", // Correct path
      link: "https://nodejs.org/en/about",
    },
    {
      src: "/icons8-nuxt-js-48.png", // Correct path
      link: "https://nuxt.com/docs/examples/hello-world"
    },
    {
      src: "/icons8-express-js-64.png", // Correct path
      link: "https://expressjs.com/en/starter/examples.html"
    },
    {
      src: "/icons8-adonis-js-48.png", // Correct path
      link: "https://docs.adonisjs.com/guides/preface/introduction"
    },
    
  ];

  const text = "Welcome to the guides section! Here, you'll find not only detailed instructions on JavaScript, React, Node.js, and other technologies but also support from like-minded individuals. Our guides will help you understand the intricacies and inspire you to take on new projects. Join our community, share your experiences, and grow with us!";

  const [screeText, setScreeText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScreeText((prev) => prev + text[index]);
      if (index >= text.length - 1) {
        clearInterval(interval);
      } else {
        setIndex((prev) => (prev + 1));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <div className='sub-page'>
      <div className='sub-page-card text-white screen'>
        <div className='substrate'>
          {screeText} <span className='cursor blinking-text'>_</span>
        </div>
      </div>
      {/* Use map to render images from the array without linking */}
      {imageSources.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
          <img key={index} src={image.src} alt={`img-${index + 1}`} className="sub-page-img" />
        </a>
      ))}
    </div>
  );
}
