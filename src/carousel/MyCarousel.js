import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MyCarousel.css';

const API_KEY = 'sEmlRMkylz52wBy1OhX8Ma6gOkZnUah8'; // Updated API key
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`; // Fetch random GIFs

function MyCarousel() {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 2000 });
        fetchGifs();
    }, []);

    const fetchGifs = async () => {
        try {
            const fetchedGifs = [];
            for (let i = 0; i < 5; i++) {
                const response = await fetch(API_URL);
                const data = await response.json();
                fetchedGifs.push(data.data);
            }
            setGifs(fetchedGifs);
        } catch (error) {
            console.error('Error fetching GIFs:', error);
        }
    };

    return (
        <div className="carousel-container">
            <Carousel>
                {gifs.map((gif, index) => (
                    <Carousel.Item key={gif.id} data-aos="fade-up">
                        <img className="d-block w-100 carousel-image" src={gif.images.original.url} alt={`Slide ${index + 1}`} />
                        <Carousel.Caption>
                            <h3 className="carousel-title">Random Slide {index + 1}</h3>
                            <p className="carousel-text">Random GIF from API</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default MyCarousel;
