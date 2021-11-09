import React from 'react';
import classes from './BottomBanner.module.scss';
import BottomBannerPic from '../../../../../assets/images/BottomBanner.jpg';
const BottomBanner=()=>{
    return(
        <div className={classes.BottomBanner}>
            <img   src={BottomBannerPic} />
        </div>
    )
}
export default BottomBanner;