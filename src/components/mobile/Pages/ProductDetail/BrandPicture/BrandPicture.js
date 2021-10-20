import React from 'react';
import classes from './BrandPicture.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import PicProduct from './../../../../../assets/images/mobilePics/Poco F3.jpg';
const BrandPicture=()=>{
    return(
        <Auxx>
            <div className={classes.Title}>
                <span>
                    گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم
                </span>
                <div className={classes.DesEnglish}>
                    Xiaomi POCO X3 Pro M2102J20SG Dual SIM 256GB And 8GB RAM Mobile Phone
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
