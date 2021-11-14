import React from 'react';
import '../../../../../assets/icon/style.css';
import classes  from './SimpleSliderComponent.module.scss';
import {Link} from "react-router-dom";
const SimpleSliderComponent=(props)=>{
const {mobilePic,id,title,price}=props;
    let graphImage = require('../../../../../assets/Upload/' + mobilePic)
    let CurrencyFormat = require('react-currency-format');
    return(
        <div className={classes.Card} >
            <Link  to={`/detail/${id}`}>
                <img className={classes.ProductImage} src={graphImage.default}  />
                <div className={classes.ProductDescription}  >
                    {title}
                </div>

                <div style={{textAlign:"left",marginTop:"10px"}}>

                    <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} />

                    تومان
                </div>
            </Link>
        </div>
    )
}
export default SimpleSliderComponent;