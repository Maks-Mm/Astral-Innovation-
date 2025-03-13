import React from 'react';
import './Html.css'; // Import the CSS file

export default function Html() {
  // Array containing image URLs
  const imageSources = [
    "/html.png",
    "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-icons-download-14.png"
  ];

  return (
    <div className='sub-page'>
      <div className='sub-page-card text-white'>
        Info that helps at starting
      </div>
      {/* Use map to render images from the array */}
      {imageSources.map((src, index) => (
        <img key={index} src={src} alt={`img-${index + 1}`} className='sub-page-img' />
      ))}
    </div>
  );
}
