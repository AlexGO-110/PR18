import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Indicators from './Indicators';
import './Slider.css';

const images = [
    'images/sports1.jpg',
    'images/sports2.jpg',
    'images/sports3.jpg',
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        let interval;
        if (isAutoPlay) {
            interval = setInterval(nextSlide, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    return (
        <div className="slider">
            <img src={images[currentIndex]} alt="Sports Moment" className="slide" />
            <Controls nextSlide={nextSlide} prevSlide={prevSlide} isAutoPlay={isAutoPlay} setIsAutoPlay={setIsAutoPlay} />
            <Indicators currentIndex={currentIndex} totalSlides={images.length} />
        </div>
    );
};

export default Slider;
