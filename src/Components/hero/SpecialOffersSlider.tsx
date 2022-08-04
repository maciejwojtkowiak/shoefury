import shoeImg from '../../images/shoe.png';
import { TbRectangle } from 'react-icons/tb';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const SpecialOffersSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => --prevSlide);
  };
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => ++prevSlide);
  };
  const images = [
    <img src={shoeImg} alt="shoe img" className="w-full h-full" />,
    <img src={shoeImg} alt="shoe img" className="w-full h-full" />,
    <img src={shoeImg} alt="shoe img" className="w-full h-full" />,
  ];
  return (
    <div className="bg-white w-[1600px] h-[800px] drop-shadow-2xl flex justify-center items-center flex-col relative overflow-hidden">
      <div className="flex rounded-lg md:h-96  overflow-hidden">
        {images.map((image, index) => {
          return (
            <div className="w-full grid place-items-center overflow-hidden">
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
        <div className="absolute top-1/2 left-[2%] z-10" onClick={goToPreviousSlide}>
          <BsFillArrowLeftCircleFill size={48} />
        </div>
        <div className="absolute top-1/2 right-1" onClick={goToNextSlide}>
          <BsFillArrowRightCircleFill size={48} />
        </div>
        <div className="flex absolute bottom-[5%]">
          {images.map((_, index) => {
            if (index === currentSlide) {
              return <TbRectangle color="red" />;
            }
            return <TbRectangle />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersSlider;
