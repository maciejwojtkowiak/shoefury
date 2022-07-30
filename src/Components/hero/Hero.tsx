import mountainRun from "../../images/mountain.gif"
import SpecialOffersSlider from "../specialOffersSlider/SpecialOffersSlider"

const Hero = () => {
    return (
        <div className="w-full">
            <div className="grid place-items-center mt-8 z-0">
                <img className="w-[120rem] h-[40rem] col-start-1 col-end-2 row-start-1 row-end-2" src={mountainRun} alt="hero" />
                <div className="col-start-1 col-end-2 row-start-1 row-end-2 -mb-[35rem] "><SpecialOffersSlider /></div>
            </div>
        </div>
    )
}

export default Hero