import React from 'react';
import leftTop from './../../../../assets/images/slider/leftTop.jpg';
import leftBottom from './../../../../assets/images/slider/leftBottom.jpg';
import classes from './SliderLeft.module.scss';
const SliderLeft=()=>{
    return(
        <div style={{width:"40%"}}>
            <aside  style={{width:"95%"}}>
                <div >
                    <img src={leftTop} className={classes.images} />
                </div>
                <div>
                    <img src={leftBottom}  className={classes.images}  />
                </div>
            </aside>
        </div>
    )
}
export default SliderLeft;