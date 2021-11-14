import React from 'react';
import classes from './Intro.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";

const Intro=(props)=>{
    const {detailProduct}=props;
    return(
        <Auxx>
            <div className={classes.Description}>
                <div className={classes.DescriptionTitle}>
مشخصات فنی
                </div>
                <ul>
                    <li>
                        تکنولوژی صفحه نمایش :
                        {detailProduct.ProLCD}
                    </li>
                    <li>
                        سیستم عامل :
                        {detailProduct.ProOS}
                    </li>
                    <li>
                        حافظه داخلی:
                        {detailProduct.ProHDD}
                   گیگابایت
                    </li>
                </ul>
            </div>

        </Auxx>
    )
}
export default Intro;