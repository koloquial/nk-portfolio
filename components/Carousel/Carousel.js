'use client'
import './styles.css';
import { useState, useEffect } from 'react';

const Carousel = ({ heading, footer, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); 
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-heading'>
      {heading && heading}

      {windowWidth >= 1024 && footer}
      
      </div>
      
      <div className='carousel'>
          <img 
          className='thumbnail' 
          src={images[currentIndex].src} 
          alt={`Slide ${currentIndex + 1}`} 
          /> 
      </div>

      <div className='carousel-buttons'>
        <button className='carousel-button left' onClick={prevSlide}>&#10094;</button>
        <button className='carousel-button right' onClick={nextSlide}>&#10095;</button>
      </div>

      {windowWidth < 1024 && footer}
    </div>
  );
};

export default Carousel;
