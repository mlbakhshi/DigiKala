import React from 'react';
import prd2 from "../../../../../assets/images/incredibleSuper/2.jpg";
import '../../../../../assets/icon/style.css';
import classes  from './SimpleSliderComponent.module.scss';
const SimpleSliderComponent=(props)=>{
    return(
        <div className={classes.Card} >
            <img className={classes.ProductImage} src={`./../../${props.mobilePic}`}  />
            <div className={classes.ProductDescription}  >
                {props.title}
            </div>

            <div style={{textAlign:"left",marginTop:"10px"}}>

                {props.price} تومان
            </div>
        </div>
    )
}
export default SimpleSliderComponent;