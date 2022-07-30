import mountainRun from "../../images/mountain.gif"
import SpecialOffersSlider from "./SpecialOffersSlider"

const Hero = () => {
    return (
        <div className="w-full">
            <div className="grid place-items-center mt-8 z-0">
                <img className="w-[1800px] h-[700px] col-start-1 col-end-2 row-start-1 row-end-2" src={mountainRun} alt="hero" />
                <div className="col-start-1 col-end-2 row-start-1 row-end-2 -mb-[700px] "><SpecialOffersSlider /></div>
            </div>
        </div>
    )
}

export default Hero