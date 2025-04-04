import React from 'react';
import './Footer.css'; // Ensure you import the CSS file

// Define the type for the image object
interface Image {
  src: string;
  href: string;
  alt: string;
}

// Define the images array
const images: Image[] = [
  {
    src: 'https://media.tenor.com/94wsoEhGmUcAAAAM/atom-animation.gif',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 1',
  },
  {
    src: 'https://media1.tenor.com/m/A15H8E1VUh8AAAAd/github-cat.gif',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 2',
  },
  {
    src: 'https://media.tenor.com/4z3DTe5fqLwAAAAm/world.webp',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 3',
  },
  {
    src: 'https://www.saagie.com/wp-content/uploads/elementor/thumbs/Visual-studio-code-q3vwi3jhzogc2dhdrll9o0u7d8hl95mpbwo9w8zsow.png',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 3',
  },

  {
    src: 'https://assets-v2.lottiefiles.com/a/2a2a499e-116d-11ee-8f41-7f82227ba589/MIgBtJS610.gif',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 2',
  },
  {
    src: 'https://media4.giphy.com/media/26wdcnG8UP85vOtGw/giphy.webp?cid=ecf05e47f8ak1qn5jptbj99ao5ht1ekpz5vnxn5zddmfuung&ep=v1_gifs_related&rid=giphy.webp&ct=gg',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 3',
  },
  {
    src: 'https://media.tenor.com/80QPiB4JMLMAAAAM/logo.gif',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 1',
  },
  {
    src: 'https://assets-v2.lottiefiles.com/a/d52eadd4-1169-11ee-9084-2fbe5293b377/2KR11WluBY.gif',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 2',
  },
  {
    src: 'https://media.licdn.com/dms/image/v2/D5612AQFqSpDkLw1J-A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684611545713?e=2147483647&v=beta&t=DNeUrCAELYv4eVQk9axptvMYB5A2lFVTX6_wfXSET2I',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 1',
  },

  {
    src: 'https://media.tenor.com/F_aIpdp3hEwAAAAj/git-github.gif',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 3',
  },
  {
    src: 'https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-30-905_512.gif',
    href: 'https://github.com/your-profile',
    alt: 'Description of image 3',
  },

];

// Create the ImageLinks component
const ImageLinks: React.FC = () => {
  return (
    <ul className="image-links"> {/* Added class name for styling */}
      {images.map((image, index) => (
        <li key={index}>
          <a
            href={image.href}
            className="GitHub"
            style={{ backgroundImage: `url(${image.src})` }} // Set the background image correctly
            aria-label={image.alt} // Add alt text for accessibility
          >
            {/* You can add any content inside the link if necessary */}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Footer component
const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="content">
      </div>
      <footer className="footer">
        <div className="footer-content">
          <ImageLinks /> {/* Integrating ImageLinks here */}
          <p>&copy; 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
