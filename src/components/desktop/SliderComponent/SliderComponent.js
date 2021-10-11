import React from 'react'
import prd2 from "../../../assets/images/incredibleSuper/2.jpg";
import '../../../assets/icon/style.css';
import classes  from './SliderComponent.module.scss';
const SliderComponent=(props)=>{
    return(
        <div className={classes.Card} >
            <img className={classes.ProductImage}  src={props.SuperProductsPics} />
            <div className={classes.ProductDescription}  >
                {/*بسته 250 گرمی عدس برند damdel*/}
                {props.productDiscription.description}
            </div>
            <div className={classes.DigiPay} >
                <span className="icon-Dg-plus" style={{fontSize:"15px"}}>  </span>
                {/*هدیه نقدی 1200 تومان*/}
               هدیه نقدی  {props.productDiscription.digipay} تومان
            </div>
            <div className={classes.OffPrice} >
                <div className={classes.OffPercent} >
                    {/*20%*/}
                    {props.productDiscription.OffPercent}%
                </div>
                <div style={{marginLeft:"10px"}}>
                    <del>
                        {/*20000 تومان*/}
                        {props.productDiscription.OriginalPrice} تومان
                    </del>
                </div>
            </div>
            <div style={{textAlign:"left"}}>
                {/*18000 تومان*/}
                {props.productDiscription.OffPrice} تومان
            </div>
        </div>
    )
}
export default SliderComponent;