import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import map from '../assets/images/map.jpg'; // Import the image
import map1 from '../assets/images/background.webp'; // Import the image
import map2 from '../assets/images/download.gif'; // Import the image
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MyCarousel.css'; // Import the CSS file
import { useEffect } from 'react';

function MyCarousel() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        //  <img className="d-block w-100 carousel-image" src={"map"} alt="Galaxy slide" />
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item data-aos="fade-up">
                    <img src="https://windowscustomization.com/wp-content/uploads/2019/01/Blue-Connected-Particles.gif" />

                    <Carousel.Caption>
                        <h3 className="carousel-title">Galaxy Slide</h3>
                        <p className="carousel-text">Explore the beauty of the galaxy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-image" src="https://windowscustomization.com/wp-content/uploads/2019/01/Blue-Connected-Particles.gif" alt="Second slide" />
                    <Carousel.Caption>
                        <h3 className="carousel-title">Second Slide Label</h3>
                        <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-image" src="https://windowscustomization.com/wp-content/uploads/2019/01/Blue-Connected-Particles.gif" alt="Third slide" />
                    <Carousel.Caption>
                        <h3 className="carousel-title">Third Slide Label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel;
