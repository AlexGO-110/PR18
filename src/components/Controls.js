import React from 'react';

const Controls = ({ nextSlide, prevSlide, isAutoPlay, setIsAutoPlay }) => {
    return (
        <div className="controls">
            <button onClick={prevSlide}>Назад</button>
            <button onClick={nextSlide}>Вперёд</button>
            <button onClick={() => setIsAutoPlay(!isAutoPlay)}>{isAutoPlay ? 'Стоп' : 'Старт'}</button>
        </div>
    );
};

export default Controls;
