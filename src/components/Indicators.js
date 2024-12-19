import React from 'react';

const Indicators = ({ currentIndex, totalSlides }) => {
    return (
        <div className="indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <span key={index} className={currentIndex === index ? 'active' : ''}></span>
            ))}
        </div>
    );
};

export default Indicators;
