"use client";
import CarouselModel from '@/models/CarouselModel';

const Carousel = () => {
    const model = CarouselModel();
  return (
    <div className="relative overflow-hidden w-full h-[600px]" style={{ zIndex: -1 }}>
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${model.currentIndex * 100}%)` }}>
        {model.carouselData.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 items-center justify-center">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button onClick={model.action.prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        &#9664;
      </button>
      <button onClick={model.action.nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
