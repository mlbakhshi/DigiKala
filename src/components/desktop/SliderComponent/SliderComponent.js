import React from 'react'
import prd2 from "../../../assets/images/incredibleSuper/2.jpg";
import '../../../assets/icon/style.css';
import classes  from './SliderComponent.module.scss';
const SliderComponent=(props)=>{
    return(
        <div className={classes.Card} >
            {/*<div style={{backgroundImage:`url("${props.SuperProductsPics}")`}} className={classes.ProductImage}>H</div>*/}
            <img className={classes.ProductImage}  src={props.src} />
            <div className={classes.ProductDescription}  >
                {/*بسته 250 گرمی عدس برند damdel*/}
                {props.description}
            </div>
            <div className={classes.DigiPay} >
                <span className="icon-Dg-plus" style={{fontSize:"15px"}}>  </span>
                {/*هدیه نقدی 1200 تومان*/}
               هدیه نقدی  {props.digipay} تومان
            </div>
            <div className={classes.OffPrice} >
                <div className={classes.OffPercent} >
                    {/*20%*/}
                    {props.OffPercent}%
                </div>
                <div style={{marginLeft:"10px"}}>
                    <del>
                        {/*20000 تومان*/}
                        {props.OriginalPrice} تومان
                    </del>
                </div>
            </div>
            <div style={{textAlign:"left"}}>
                {/*18000 تومان*/}
                {props.OffPrice} تومان
            </div>
        </div>
    )
}
export default SliderComponent;