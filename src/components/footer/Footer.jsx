import React from 'react';
import './Footer.css'; // Ensure you import the CSS file

function Footer() {
  return (
    <div className="footer-container">
      <div className="content">
        <p className="text-white">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>&copy; 2025  All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
