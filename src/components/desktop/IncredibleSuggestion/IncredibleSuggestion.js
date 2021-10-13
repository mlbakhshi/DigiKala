import React from "react";
import classes from './IncredibleSuggestion.scss';
import incredibleSuggestImage from './../../../assets/images/incredibleSuggestion/incredibleSuggestionImage.png';
import SlickSlide from "../Incredible/SlickSlider/SlickُSlider/SlickSlider";
import Pic1 from "../../../assets/images/incredibleSuggestion/1.jpg";
import Pic2 from "../../../assets/images/incredibleSuggestion/2.jpg";
import Pic3 from "../../../assets/images/incredibleSuggestion/3.jpg";
import Pic4 from "../../../assets/images/incredibleSuggestion/4.jpg";
import Pic5 from "../../../assets/images/incredibleSuggestion/5.jpg";


const IncredibleSuggestion=()=>{
    const IncredibleProducts=[
        {description:"کاپشن نوزادی مدل سرابلا کد 1455",digipay:"0",OffPercent:"34",OriginalPrice:"288000",OffPrice:"189000",src:{Pic1}},
        {description:"سه تار عزیزی ویژه",digipay:"17400",OffPercent:"32",OriginalPrice:"510000",OffPrice:"349000",src:{Pic2}},
        {description:"مانتو زنانه",digipay:"0",OffPercent:"25",OriginalPrice:"159000",OffPrice:"119000",src:{Pic3}},
        {description:"رو بالشی نرم بافت مدل VX0111 بسته 2 عددی",digipay:"0",OffPercent:"58",OriginalPrice:"92000",OffPrice:"42000",src:{Pic4}},
        {description:"شارژر همراه ژیپین مدل PX302 ظرفیت 20000 میلی آمپر ساعت",digipay:"0",OffPercent:"24",OriginalPrice:"379000",OffPrice:"289000",src:{Pic5}},
    ];
return(
    <section style={{ backgroundColor: "#ef394e",
        width: "100%",
        margin: "0",
        padding: "0",
        display: "flex",
        height: "450px"
    }}>
        <div style={{width:"30%"}}>
            <img src={incredibleSuggestImage} style={{width: "60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15px",
                marginRight: "30px"}}/>
        </div>
        <div style={{margin:"auto",width:"70%"}}>
            <SlickSlide Products={IncredibleProducts}
                        // ProductsPics={Pic}
            />
        </div>
    </section>
)
}
export default IncredibleSuggestion;