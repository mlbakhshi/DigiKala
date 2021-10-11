import React from "react";
import classes from './incredible.module.scss';
import incredibleSuperImage from './../../../assets/images/shegeft angiz super marketi.png';
import SlickSlide from "./SlickSlider/SlickُSlider/SlickSlider";
import Pic1 from "../../../assets/images/incredibleSuper/1.jpg";
import Pic2 from "../../../assets/images/incredibleSuper/2.jpg";
import Pic3 from "../../../assets/images/incredibleSuper/3.jpg";
import Pic4 from "../../../assets/images/incredibleSuper/4.jpg";
import Pic5 from "../../../assets/images/incredibleSuper/5.jpg";
import Pic6 from "../../../assets/images/incredibleSuper/6.jpg";

const Incredible=()=>{
    const SuperProducts=[
        {description:"مایع لوله باز کن پاکناز مدل Strong Cleaner حجم 1250 میلی لیتر",digipay:"0",OffPercent:"20",OriginalPrice:"20000",OffPrice:"18000"},
        {description:"عدس همدل - 900 گرم",digipay:"۱,۳۰۰",OffPercent:"20",OriginalPrice:"50000",OffPrice:"48000"},
        {description:"کنسرو ماهی تن با شوید طبیعت مقدار 180 گرم",digipay:"0",OffPercent:"9",OriginalPrice:"50000",OffPrice:"49000"},
        {description:"مایع ظرفشویی پریل مدل Orange and Grapefruit حجم 3.75 لیتر",digipay:"20000",OffPercent:"15",OriginalPrice:"50000",OffPrice:"35000"},
        {description:"میگو سایز 60-51 بیستون - 500 گرم",digipay:"0",OffPercent:"0",OriginalPrice:"189000",OffPrice:"189000"},
        {description:"ماست یونانی کم چرب پگاه - 1.5 کیلوگرم",digipay:"1200",OffPercent:"10",OriginalPrice:"47000",OffPrice:"35000"},


    ];
    const SuperProductsPics=[{Pic1},{Pic2},{Pic3},{Pic4},{Pic5},{Pic6}];
    return(
        <section className={classes.incredibleSec}>
            <div style={{width:"30%"}}>
                <img src={incredibleSuperImage} className={classes.Image}/>
            </div>
            <div style={{margin:"auto",width:"70%"}}>
                <SlickSlide superProducts={SuperProducts} SuperProductsPics={SuperProductsPics}  />
            </div>
        </section>
    )
}
export default Incredible;