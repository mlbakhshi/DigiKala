import React from 'react';
import classes from './BrandPicture.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import PicProduct from './../../../../../assets/images/mobilePics/Poco F3.jpg';
const BrandPicture=(props)=>{
    console.log(props.detail);
    return(
        <Auxx>
            <div className={classes.Title}>
                <span>
 {props.detail.ProductNamePr}
                </span>
                <div className={classes.DesEnglish}>
                    {props.detail.ProductNameEn}
                </div>
                <div className={classes.ProductPic}>
                    <img src={PicProduct} />
                </div>
                <div className={classes.Like}>
                    <div className={classes.LikeFont}>
                        <i className="fa fa-thumbs-o-up " />
                    </div>
                    ۸۹٪ (بیشتر از ۹۹۹ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
                </div>
            </div>
        </Auxx>
    )
}
export default BrandPicture;
