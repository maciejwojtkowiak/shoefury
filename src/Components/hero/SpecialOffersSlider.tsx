import shoeImg from '../../images/shoe.png';
import {TbRectangle} from "react-icons/tb"

const SpecialOffersSlider = () => {
  return (
    <div className="bg-white w-[1600px] h-[700px] drop-shadow-2xl grid place-items-center">
      <img
        src={shoeImg}
        alt="shoe img"
        className="h-3/4 w-3/4 "
      />
      <TbRectangle color='' />
    </div>
  );
};

export default SpecialOffersSlider;
