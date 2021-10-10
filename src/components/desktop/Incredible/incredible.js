import React from "react";
import classes from './incredible.module.scss';
import incredibleSuperImage from './../../../assets/images/shegeft angiz super marketi.png';
import Responsive from "./SlickSlider/SlickُSlider/SlickSlider";
const Incredible=()=>{
    return(
        <section className={classes.incredibleSec}>
            <div>
                <img src={incredibleSuperImage} className={classes.Image}/>
            </div>
            <div>
                <Responsive />
            </div>
        </section>
    )
}
export default Incredible;