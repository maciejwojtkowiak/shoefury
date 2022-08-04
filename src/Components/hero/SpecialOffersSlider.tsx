import shoeImg from '../../images/shoe.png';
import { TbRectangle } from 'react-icons/tb';
import { Fragment, useState } from 'react';

const SpecialOffersSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    <img src={shoeImg} alt="shoe img" />,
    <img src={shoeImg} alt="shoe img" />,
    <img src={shoeImg} alt="shoe img" />,
  ];
  return (
    <div className="bg-white w-[1600px] h-[700px] drop-shadow-2xl grid place-items-center">
      <div className="flex w-[1600px] h-[700px] realtive rounded-lg md:h-96 overflow-hidden relative ">
        {images.map((image, index) => {
          return (
            <div
              className="w-full h-full absolute"
              style={{
                transform: `translateX(${(index - currentSlide) * currentSlide}%)`,
              }}
            >
              {image}
              {index}
            </div>
          );
        })}
        <TbRectangle color="" />
      </div>
    </div>
  );
};

export default SpecialOffersSlider;
