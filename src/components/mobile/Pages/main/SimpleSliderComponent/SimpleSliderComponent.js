import React from 'react';
import prd2 from "../../../../../assets/images/incredibleSuper/2.jpg";
import '../../../../../assets/icon/style.css';
import classes  from './SimpleSliderComponent.module.scss';
import {Link} from "react-router-dom";
const SimpleSliderComponent=(props)=>{
    let CurrencyFormat = require('react-currency-format');
    return(
        <div className={classes.Card} >
            <Link  to={`/detail/${props.id}`}>
                <img className={classes.ProductImage} src={`./../../${props.mobilePic}`}  />
                <div className={classes.ProductDescription}  >
                    {props.title}
                </div>

                <div style={{textAlign:"left",marginTop:"10px"}}>

                    <CurrencyFormat value={props.price} displayType={'text'} thousandSeparator={true} />

                    تومان
                </div>
            </Link>
        </div>
    )
}
export default SimpleSliderComponent;