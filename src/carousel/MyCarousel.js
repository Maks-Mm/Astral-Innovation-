import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import map from '/public/html.png'; // Import the image


import './MyCarousel.css'; // Import the CSS file

function MyCarousel() {
    return (
        //  <img className="d-block w-100 carousel-image" src={"map"} alt="Galaxy slide" />
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDg1M2JwMHFhcWFhbmh6bXduOWVkNDIwMXk5dTE1bWxvYmMyenRkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hczDQdBHbN5L2/giphy.gif" alt="" />

                    <Carousel.Caption>
                        <h3 className="carousel-title">Galaxy Slide</h3>
                        <p className="carousel-text">Explore the beauty of the galaxy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-image" src={"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHN6ODB1ZHl5OGFtOHlpcGNsZXRvdWxmaGpwZmptNm5taHNlcTZ5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6NiX9zeko5Le8/giphy.gif"} alt="Second slide" />
                    <Carousel.Caption>
                        <h3 className="carousel-title">Second Slide Label</h3>
                        <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-image" src={"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExemFvczUwZG83MHFkYXEwenE1cXR1YmZieWxwZ3M0cDltZ3ViZXphYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9TyuOufzHSpKo/giphy.gif"} alt="Third slide" />
                    <Carousel.Caption>
                        <h3 className="carousel-title">Third Slide Label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel;
