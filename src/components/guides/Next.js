import React from 'react';
import './Next.css';




function Next() {
    const images = [

        {
            src: "/TypeScript.png", // Correct path
            link: ""
        },
        {
            src: "/Optimizing.jpeg", // Correct path
            link: "",
        },
        {
            src: "/ChatGPTStylingNext.png", // Correct path
            link: "",
        },
        {
            src: "/NextRouting.jpg", // Correct path
            link: "",
        },
        {
            src: "/RenderingNext.jpg", // Correct path
            link: ""
        },
    ];

    return (
        <div className='sub-page relative'>
            <div className=''>
            <div className='tv-effect card-css sub-page-card '>
            </div>
            </div>

            <div className='image-container z-20 mt-10'>
    {images.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.src} alt={`img-${index + 1}`} className="sub-page-img" />
        </a>
    ))}
</div>


        </div>
    );
}

export default Next;
