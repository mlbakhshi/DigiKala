import React from 'react';
import classes from './Container.module.scss';
import Slider from "./Slider/Slider";

const ContainerHome=()=>{
    return(
        <div >
            <article className={classes.ContainerHome}>
                <Slider />
            </article>
        </div>
    )
}
export default ContainerHome;