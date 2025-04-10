import React from 'react';
import './Next.css';

function Next() {
    return (
        <div className='sub-page'>
            <div className='tv-effect card-css text-white'></div>
            <div className='image-container'>
                <div className='top-image'>
                    <img
                        src="https://webclues-prod.s3.us-east-2.amazonaws.com/webcluesinfotech/1730802029807Frame%201261153554-min.jpg"
                        alt="Main"
                        className='image-large w-80 h-70 object-cover'
                    />
                </div>
                {/* First Row: Three Images */}
                <div className='image-row'>
                    <img
                        src="/TypeScript.png"
                        alt="TypeScript"
                        className='image-small w-80 h-70 object-cover'
                    />
                    <img
                        src="/Optimizing.jpeg"
                        alt="Optimizing"
                        className='image-small w-80 h-70 object-cover'
                    />
                    <img
                        src="/ChatGPTStylingNext.png"
                        alt="ChatGPT Styling Next"
                        className='image-small w-80 h-70 object-cover'
                    />
                </div>
                {/* Second Row: Two Images */}
                <div className='image-row'>
                    <img
                        src="/NextRouting.jpg"
                        alt="Next Routing"
                        className='image-small w-80 h-70 object-cover'
                    />
                    <img
                        src="/RenderingNext.jpg"
                        alt="Rendering Next"
                        className='image-small w-80 h-70 object-cover'
                    />
                </div>
            </div>
            <div className='text-white'>
                Idea to create new tutorials structure of Next.js
            </div>
            <div className='text-white'>
                Documentation that helps developers get started and troubleshoot issues effectively.
            </div>
        </div>
    );
}

export default Next;
