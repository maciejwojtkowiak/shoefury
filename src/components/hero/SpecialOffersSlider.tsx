import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaSquare } from "react-icons/fa";

import shoeImg from "../../images/shoe.png";

const SpecialOffersSlider = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPreviousSlide = (): void => {
    setCurrentSlide((prevSlide) => --prevSlide);
  };
  const goToNextSlide = (): void => {
    setCurrentSlide((prevSlide) => ++prevSlide);
  };
  const goToSlideOnDot = (dotIndex: number): void => {
    setCurrentSlide(dotIndex);
  };
  const images = [
    <img src={shoeImg} alt="shoe img" className="w-full h-full" key={1} />,
    <img src={shoeImg} alt="shoe img" className="w-full h-full" key={2} />,
    <img src={shoeImg} alt="shoe img" className="w-full h-full" key={3} />,
  ];
  return (
    <div className="bg-white w-[1600px] h-[800px] drop-shadow-2xl flex justify-center items-center flex-col relative overflow-hidden rounded-md">
      <div className="flex rounded-lg md:h-96  overflow-hidden">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="w-full grid place-items-center overflow-hidden"
            >
              <div
                className="w-full h-full absolute z-[-2] transition grid place-items-center"
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <div className="w-[80%] h-full">{image}</div>
              </div>
            </div>
          );
        })}
        <button
          className="absolute top-1/2 left-[2%] z-10"
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
        >
          <BsFillArrowLeftCircleFill
            size={48}
            color={currentSlide === 0 ? "gray" : "black"}
          />
        </button>
        <button
          className="absolute top-1/2 right-[2%] "
          onClick={goToNextSlide}
          disabled={currentSlide === images.length - 1}
        >
          <BsFillArrowRightCircleFill
            size={48}
            color={currentSlide === images.length - 1 ? "gray" : "black"}
          />
        </button>
        <div className="flex gap-2 absolute bottom-[5%] translate-x[50%] translate-y-[50%]">
          {images.map((_, index) => {
            if (index === currentSlide) {
              return <FaSquare size={32} color="#fb923c" key={index} />;
            }
            return (
              <button onClick={() => goToSlideOnDot(index)} key={index}>
                <FaSquare size={32} color="#e5e5e5" />{" "}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersSlider;
