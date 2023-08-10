import React, { useState } from "react";
import Pre from "../Assets/Icons/left-arrow.png";
import Next from "../Assets/Icons/right-arrow.png";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider" style={{ width: "100vw", height: "100vh" }}>
      <button onClick={handlePrevImage}>
        <img src={Pre} alt="" />
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="slider-image"
      />

      <button onClick={handleNextImage}>
        <img src={Next} alt="" />
      </button>
    </div>
  );
};

export default ImageSlider;
