// MyCarousel.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MyCarousel.css';

const API_KEY = 'sEmlRMkylz52wBy1OhX8Ma6gOkZnUah8';
const tag = 'programming';
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g&tag=${tag}`;

function MyCarousel() {
  const [gifs, setGifs] = useState([]);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    fetchGifs();
  }, []);

  const fetchGifs = async () => {
    try {
      const promises = Array.from({ length: 6 }, () => fetch(API_URL).then(res => res.json()));
      const results = await Promise.all(promises);
      setGifs(results.map(r => r.data));
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  const rotateLeft = () => setAngle((prev) => prev - 60);
  const rotateRight = () => setAngle((prev) => prev + 60);

  return (
    <div className="carousel-3d-wrapper">
      <div
        className="carousel-3d-container"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        {gifs.map((gif, idx) => {
          const rotation = (360 / gifs.length) * idx;
          return (
            <div
              key={gif.id || idx}
              className="carousel-3d-item"
              style={{
                transform: `rotateY(${rotation}deg) translateZ(300px)`,
              }}
              data-aos="zoom-in"
            >
              <img src={gif.images.original.url} alt={`Slide ${idx}`} />
              <div className="carousel-caption">
                <h3 className="carousel-title">Random Slide {idx + 1}</h3>
                <p className="carousel-text">Random GIF from API</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button onClick={rotateLeft}>⬅️</button>
        <button onClick={rotateRight}>➡️</button>
      </div>
    </div>
  );
}

export default MyCarousel;
