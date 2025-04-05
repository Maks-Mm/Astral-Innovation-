import React, { useEffect, useState } from 'react';
import './GuidStart.css'; // Import the CSS file


export default function GuidStart() {
  // Array containing image URLs
  const imageSources = [
    "https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png",
    "icons8-nuxt-js-48.png",
    "icons8-express-js-64.png",
    "/icons8-adonis-js-48.png",
    "icons8-nodejs-48.png", "icons8-nuxt-js-48.png",
    "icons8-express-js-64.png",
    "/icons8-adonis-js-48.png",
    "icons8-nodejs-48.png",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fweb.dev%2Fcss%3Fhl%3Dde&psig=AOvVaw3Dxbxz4HXik0I9nF7Hhv_5&ust=1742682928033000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNi6gfmdnIwDFQAAAAAdAAAAABAE",


  ];


  const text = "Welcome to the guides section! Here, you'll find not only detailed instructions on JavaScript, React, Node.js, and other technologies but also support from like-minded individuals. Our guides will help you understand the intricacies and inspire you to take on new projects. Join our community, share your experiences, and grow with us!";

  const [screeText, setScreeText] = useState('');

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScreeText((prev) => prev + text[index]);
      console.log(index);
      if (index > text.length - 1) {
        clearInterval(interval);
      } else {
        setIndex((prev) => (prev + 1));

      }
    }, 30);
    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <div className='sub-page'>
      <div className='sub-page-card text-white screen' >
        <div className='substrate' >
          {screeText} <span className='cursor blinking-text'>_</span>
        </div>
      </div>
      {/* Use map to render images from the array */}
      {imageSources.map((src, index) => (
        <img key={index} src={src} alt={`img-${index + 1}`} className="sub-page-img" />
      ))}
    </div>
  );
}
