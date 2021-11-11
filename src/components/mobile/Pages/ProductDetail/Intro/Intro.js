import React from 'react';
import classes from './Intro.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";

const Intro=(props)=>{
    return(
        <Auxx>
            <div className={classes.Description}>
                <div className={classes.DescriptionTitle}>
مشخصات فنی
                </div>
                <ul>
                    <li>
                        تکنولوژی صفحه نمایش :
                        {props.detailProduct.ProLCD}
                    </li>
                    <li>
                        سیستم عامل :
                        {props.detailProduct.ProOS}
                    </li>
                    <li>
                        حافظه داخلی:
                        {props.detailProduct.ProHDD}
                   گیگابایت
                    </li>
                </ul>
            </div>

        </Auxx>
    )
}
export default Intro;