import mountainRun from "../../images/mountain.gif"
import SpecialOffersSlider from "./SpecialOffersSlider"

const Hero = () => {
    return (
        <div className="w-full h-[1200px]">
            <div className="grid grid-rows-[repeat(2,minmax(min-content,1fr))] place-items-center mt-8  ">
                <img className="w-[1800px] h-[700px] col-start-1 col-end-2  row-start-1 row-end-2 " src={mountainRun} alt="hero" />
                <div className="col-start-1 col-end-2 row-start-1 row-end-3"><SpecialOffersSlider /></div>
            </div>
        </div>
    )
}

export default Hero