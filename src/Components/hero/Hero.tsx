import mountainRun from '../../images/mountain.gif';
import SpecialOffersSlider from './SpecialOffersSlider';
import shoeImg from '../../images/shoe.png';
import Products from '../products/Products';

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="grid grid-rows-[repeat(2,minmax(min-content,350px))]  mt-8  ">
        <img
          className="w-[1800px] h-[700px] col-start-1 col-end-2  row-start-1 row-end-2 self-end justify-self-center "
          src={mountainRun}
          alt="hero"
        />
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 self-end justify-self-center">
          <SpecialOffersSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
