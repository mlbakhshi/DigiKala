import React from 'react';
import classes from './Intro.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";

const Intro=(props)=>{
    return(
        <Auxx>
            <div className={classes.Description}>
                <div className={classes.DescriptionTitle}>
                    ویژگی ها
                </div>
                <span>
تکنولوژی صفحه نمایش :
                    {props.detailProduct.ProLCD}
                </span>
                <hr />
                <span>
سیستم عامل :
                    {props.detailProduct.ProOS}
                </span>
                <hr />
                <span>
حافظه داخلی:
                    {props.detailProduct.ProHDD}
                    گیگابایت
                </span>
            </div>

        </Auxx>
    )
}
export default Intro;