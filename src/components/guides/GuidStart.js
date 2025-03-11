import React from 'react';
import './GuidStart.css'; // Import the CSS file

export default function GuidStart() {
  // Array containing image URLs
  const imageSources = [
    "JavaScript.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    "https://cdn-icons-png.flaticon.com/512/8167/8167751.png",
    
    
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
