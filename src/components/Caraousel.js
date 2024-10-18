import React, { useState, useEffect } from 'react';

const images = [
  {
    src: '1.png',
    alt: 'Financial Management',
  },
  {
    src: '2.png',
    alt: 'Image 2',
  },
  {
    src: '3.png',
    alt: 'Financial Management ',
    alt: 'Image 3',
  },
  {
    src: '4.png',
    alt: 'Image 4',
  },
  {
    src: '5.png',
    alt: 'Image 5',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={nextSlide}
      >
        &gt;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
