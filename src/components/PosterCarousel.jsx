import React, { useEffect, useState } from 'react';

const PosterCarousel=({ images=[], interval=2000 }) => {
    const [currentIndex, setCurrentIndex]=useState(0);

    useEffect(() => {
        const autoSlide=setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex+1)%images.length);
        }, interval);

        return () => clearInterval(autoSlide);
    }, [images.length, interval]);

    return (
        <div className="w-[95%] mx-auto overflow-hidden rounded-xl">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex*100}%)` }}
            >
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Slide ${idx}`}
                        className="w-full flex-shrink-0 object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default PosterCarousel;
