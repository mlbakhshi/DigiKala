import React from "react";
import classes from './Processing.module.scss';

const Processing=(props)=>{
    return(
        <div>
            {props.children}
            PROCESSING
        </div>
    )
}
export default Processing;