import React, { useState, useEffect } from "react";
import NextButton from "./components/NextButton";
import "./styles.css";

const App = () => {
  // Dynamically require images from the src folder
  const imagePaths = Array.from({ length: 15 }, (_, i) =>
    require(`./images/happy_image_${i + 1}.jpg`)
  );

  // State for shuffled images and current index
  const [shuffledImages, setShuffledImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle images when the app loads
  useEffect(() => {
    shuffleImages();
  }, []);

  // Function to shuffle images
  const shuffleImages = () => {
    const shuffled = [...imagePaths].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
    setCurrentIndex(0); // Reset to the first image
  };

  // Function to show the next image (in shuffled order)
  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
  };

  return (
    <div className="app-container">
      <h1>🎉⭐Brighten Your Day⭐🎉</h1>
      {/* Display only one image at a time */}
      {shuffledImages.length > 0 && (
        <div className="current-image">
          <img src={shuffledImages[currentIndex]} alt="Happy" />
        </div>
      )}

      <NextButton onClick={showNextImage} />
    </div>
  );
};

export default App;
