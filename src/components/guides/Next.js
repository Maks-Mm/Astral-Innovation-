import React from 'react';
import './Next.css';




function Next() {
    const images = [

        {
            src: "/typescript.jpg", // Correct path
            link: "https://www.typescriptlang.org/"
        },
        {
            src: "/OptimizeNext.webp", // Correct path
            link: "https://medium.com/@ignatovich.dm/optimizing-next-js-applications-a-concise-guide-a8167dfc8271",
        },
        {
            src: "/NextStyling.png", // Correct path
            link: "https://nextjs.org/docs/app/building-your-application/styling/css-in-js",
        },
        {
            src: "/OptimizeNext.webp", // Correct path
            link: "https://nextjs.org/docs/pages/building-your-application/routing",
        },
        {
            src: "/NextRendering.png", // Correct path
            link: "https://nextjs.org/docs/pages/building-your-application/rendering"
        },
        {
            src: "/FetchingNext.jpg", // Correct path
            link: "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching"
        },
    ];

    return (
        <div className='sub-page relative'>
            <div className=''>
            <div className='tv-effect card-css sub-page-card '>
            </div>
            </div>

            <div className='image-container z-20 mt-10 '>
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
