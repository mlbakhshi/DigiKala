import React from 'react'
import prd2 from "../../../../../assets/images/incredibleSuper/2.jpg";
import '../../../../../assets/icon/style.css';
import classes  from './SliderComponent.module.scss';
const SliderComponent=(props)=>{
    return(
        <div className={classes.Card} >
            {/*<div style={{backgroundImage:`url("${props.SuperProductsPics}")`}} className={classes.ProductImage}>H</div>*/}
            <img className={classes.ProductImage}  src={props.src} />
            <div className={classes.ProductDescription}  >
                {props.description}
            </div>
            <div className={classes.DigiPay} >
                <span className="icon-Dg-plus" style={{fontSize:"15px"}}>  </span>
               هدیه نقدی  {props.digipay} تومان
            </div>
            <div className={classes.OffPrice} >
                <div className={classes.OffPercent} >
                    {props.OffPercent}%
                </div>
                <div className={classes.OffPri} >
                    <del>
                        {props.OriginalPrice} تومان
                    </del>
                </div>
            </div>
            <div className={classes.FinalPrice}>
                {props.OffPrice} تومان
            </div>
        </div>
    )
}
export default SliderComponent;