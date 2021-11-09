import React from 'react';
import '../../../../../assets/icon/style.css';
import classes  from './SimpleSliderComponent.module.scss';
import {Link} from "react-router-dom";
const SimpleSliderComponent=(props)=>{
    let graphImage = require('../../../../../assets/Upload/' + props.mobilePic);
    let CurrencyFormat = require('react-currency-format');
        return(
            <div className={classes.Card} >
                <Link  to={`/detail/${props.id}`}>
                    <img className={classes.ProductImage} src={graphImage.default}  />
                    <div className={classes.ProductDescription}  >
                        {props.title}
                    </div>

                    <div className={classes.Price} >

                        <CurrencyFormat value={props.price} displayType={'text'} thousandSeparator={true} />
                        تومان
                    </div>
                </Link>
            </div>
        )


}
export default SimpleSliderComponent;