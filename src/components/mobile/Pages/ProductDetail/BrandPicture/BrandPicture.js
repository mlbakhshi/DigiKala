import React from 'react';
import classes from './BrandPicture.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
const BrandPicture=(props)=>{
    const {detail}=props;
    let graphImage = require('../../../../../assets/Upload/' + detail.ProductPicture);
    return(
        <Auxx>
            <div className={classes.Title}>
                <span>
 {detail.ProductNamePr}
                </span>
                <div className={classes.DesEnglish}>
                    {detail.ProductNameEn}
                </div>
                <div className={classes.ProductPic}>
                    <img src={graphImage.default} />
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
