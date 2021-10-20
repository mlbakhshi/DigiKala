import React from 'react';
import classes from './comercial.module.scss';
import img1 from '../../../../../assets/images/commercial/1.jpg';
import img2 from '../../../../../assets/images/commercial/2.jpg';


const Commercial=()=>{
    return(
        <div className={classes.Commercial}>

            <img src={img1} className={classes.comImage} />
            <img src={img2} className={classes.comImage} />

        </div>
    )
}
export default Commercial;
