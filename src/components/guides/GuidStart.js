import React from 'react';
import './GuidStart.css'; // Import the CSS file

export default function GuidStart() {
  // Array containing image URLs
  const imageSources = [
"https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png",
    "icons8-nuxt-js-48.png",
    "icons8-express-js-64.png",
    "/icons8-adonis-js-48.png",
    "icons8-nodejs-48.png",


  ];

  return (
    <div className='sub-page'>
      <div className='sub-page-card text-white'>
        info that helps at starting
      </div>
      {/* Use map to render images from the array */}
      {imageSources.map((src, index) => (
        <img key={index} src={src} alt={`img-${index + 1}`} className="sub-page-img" />
      ))}
    </div>
  );
}
