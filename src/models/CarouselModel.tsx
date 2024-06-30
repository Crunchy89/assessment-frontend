"use client"
import {useState} from 'react';
import {carouselData} from '@/variables/menu';

interface CarouselAction {
    nextSlide: () => void;
    prevSlide: () => void;
}
const CarouselModel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(carouselData.length - 1);
    }
  };
  const action: CarouselAction = {
    nextSlide,
    prevSlide,
    };
    return {
        currentIndex,
        carouselData,
        action,
    };
};

export default CarouselModel;