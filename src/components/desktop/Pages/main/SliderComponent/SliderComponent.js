import React from 'react'
import '../../../../../assets/icon/style.css';
import classes  from './SliderComponent.module.scss';
const SliderComponent=(props)=>{
    return(
        <div className={classes.Card} >
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
                <div style={{marginLeft:"10px"}}>
                    <del>
                        {props.OriginalPrice} تومان
                    </del>
                </div>
            </div>
            <div style={{textAlign:"left"}}>
                {props.OffPrice} تومان
            </div>
        </div>
    )
}
export default SliderComponent;