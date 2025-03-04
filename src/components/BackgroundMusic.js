import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current
        .play()
        .catch((error) => console.log("Autoplay blocked:", error));
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => document.removeEventListener("click", playAudio);
  }, []);

  return (
     // <source src="musicStop/backgroundMusic.mp3" type="audio/mpeg" />
    <audio ref={audioRef} loop>
      Your browser does not support the audio element.
      
    </audio>
  );
};

export default BackgroundMusic;
