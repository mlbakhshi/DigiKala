import React from 'react';
import prd2 from "../../../../../assets/images/incredibleSuper/2.jpg";
import '../../../../../assets/icon/style.css';
import classes  from './SimpleSliderComponent.module.scss';
const SimpleSliderComponent=(props)=>{
    return(
        <div className={classes.Card} >
            {/*<div style={{backgroundImage:`url("${props.SuperProductsPics}")`}} className={classes.ProductImage}>H</div>*/}
            <img className={classes.ProductImage}  src={props.mobilePic} />
            <div className={classes.ProductDescription}  >
                {props.title}
            </div>

            <div className={classes.Price} >

                {props.price} تومان
            </div>
        </div>
    )
}
export default SimpleSliderComponent;