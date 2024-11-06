import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const slides = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu66vGeX_oTwUmQnd3Gtscp5xf9d1TxIVd0w&s",
    title: "First Slide",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6B53Qfyk0uBkvlk8RJfmsCsznMhd67qgUw&s",
    title: "Second Slide",
  },
  {
    id: 3,
    image:
      "data:image/jpeg;base64,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",
    title: "Third Slide",
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-24 py-10">
      <div className="relative w-full rounded-xl shadow-lg overflow-hidden mx-auto">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 relative select-none"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-80 object-cover"
              />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 text-xl font-semibold text-white">
                {slide.title}
              </p>
            </div>
          ))}
        </div>
        {/* Chap tugma */}
        <button
          onClick={prevSlide}
          className="absolute bottom-0 right-8 bg-black text-white p-2 hover:bg-gray-600 transform rounded-tl-xl"
        >
          <IoMdArrowBack />
        </button>
        {/* O'ng tugma */}
        <button
          onClick={nextSlide}
          className="absolute bottom-0 right-0 bg-black text-white p-2 hover:bg-gray-600 transform"
        >
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Slider;
