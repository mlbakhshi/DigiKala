import React from 'react';
import classes from './Container.module.scss';
import Slider from "./Slider/Slider";
import SliderLeft from "./SliderLeft/SliderLeft";

const ContainerHome=()=>{
    return(
        <div >
            <article className={classes.ContainerHome}>
                <Slider />
                <SliderLeft />
            </article>
        </div>
    )
}
export default ContainerHome;