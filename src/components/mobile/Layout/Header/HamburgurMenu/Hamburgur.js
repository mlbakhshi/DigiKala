import React from "react";
import classes from './Hamburgur.module.scss';
const Hamburger=()=>{
    return(
        <div>
            <div className={classes.Hamburger}>
               <div className={classes.Burger} />
               <div className={classes.Burger} />
               <div className={classes.Burger} />
            </div>
        </div>
    )
}
export default Hamburger;