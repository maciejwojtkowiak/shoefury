import { Fragment } from "react"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"

const MainPage = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero/>
        </Fragment>
        
    )
}

export default MainPage