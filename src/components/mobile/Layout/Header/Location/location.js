import React from "react";
import classes from './location.module.scss';


const Location=()=>{
    return(
        <div className={classes.Location}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>
                ارسال به خراسان رضوی، نیشابور
            </span>
        </div>
    )
}
export default Location;