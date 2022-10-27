import React, { Fragment } from "react";
import Arrivals from "../../Component/Arrivals/Arrivals";
import Slider from "../../Component/Slider/Slider";

const Home = () =>{
    return(
        <Fragment>
            <Slider />
            <Arrivals />
        </Fragment>
    )
}


export default Home;