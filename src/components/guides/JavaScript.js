import React from 'react';
import './GuidStart.css'; // Ensure your CSS file is imported

function JavaScript() {
  return (
    <div className='sub-page'>

      <div className='sub-page-card text-white d-flex'>
        <div className='tutorial-message'>
          <h2>Welcome to the JavaScript Tutorial!</h2>
        </div>
        <div className='iframe-container'>
          <iframe
            height="300"
            style={{ width: "100%" }}
            title="JavaScript Utility Functions"
            src="https://codepen.io/Zorlimar/embed/vQQmOo?default-tab="
            frameBorder="no"
            loading="lazy"
            allowTransparency="true"
            allowFullScreen="true"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className='sub-page-card text-white screen'>
        <h3>JavaScript Fundamentals</h3>
        <p>
          In this section, we will cover the basics of JavaScript, including variables,
          functions, and control structures. Make sure to complete the examples provided
          in the embedded CodePen to solidify your understanding.
        </p>
      </div>

    </div>
  );
}

export default JavaScript;
