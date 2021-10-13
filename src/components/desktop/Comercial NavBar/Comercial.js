import React from 'react';
import classes from './comercial.module.scss';
import img1 from '../../../assets/images/commercial/1.jpg';
import img2 from '../../../assets/images/commercial/2.jpg';
import img3 from '../../../assets/images/commercial/3.jpg';
import img4 from '../../../assets/images/commercial/4.jpg';

const Commercial=()=>{
    return(
        <div className={classes.Commercial}>

            <img src={img1} className={classes.comImage} />
            <img src={img2} className={classes.comImage} />
            <img src={img3} className={classes.comImage} />
            <img src={img4} className={classes.comImage} />
        </div>
    )
}
export default Commercial;
