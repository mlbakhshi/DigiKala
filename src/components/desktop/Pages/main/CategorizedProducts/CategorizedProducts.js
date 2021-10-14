import React from 'react';
import classes from './CategorizedProducts.module.scss';
import SimpleSlickSlider from "./SimpleSlickSlider/SimpleSlickُSlider/SimpleSlickSlider";
import pic1 from '../../../../../assets/images/mobilePics/Poco x3.jpg';
import pic2 from '../../../../../assets/images/mobilePics/Pco m3.jpg';
import pic3 from '../../../../../assets/images/mobilePics/Galaxy S20.jpg';
import pic4 from '../../../../../assets/images/mobilePics/iPhone 12.jpg';
import pic5 from '../../../../../assets/images/mobilePics/iPhone 12 Pro.jpg';
import pic6 from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import pic7 from '../../../../../assets/images/mobilePics/Samsung A12.jpg';

const CategorizedProducts=()=>{
    const mobileProducts=[
        {mobilePic:pic1,title:"گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت",price:"6000000"},
        {mobilePic:pic2,title:"گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت",price:"5000000"},
        {mobilePic:pic3,title:"گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت",price:"10000000"},
        {mobilePic:pic4,title:"گوشی موبایل اپل مدل iPhone 12 A2404 دو سیم‌ کارت",price:"15000000"},
        {mobilePic:pic5,title:"گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت",price:"17000000"},
        {mobilePic:pic6,title:"گوشی موبایل شیائومی مدل POCO F3 5G M2012K11AG دو سیم‌ کارت",price:"6500000"},
        {mobilePic:pic7,title:"گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت",price:"6000000"},

    ]

    return(
        <section className={classes.Category}>
            <div >
              <span >
                 <h6 >
                     گوشی موبایل
                 </h6>
                  <hr style={{backgroundColor: "red",width:"100px",marginRight:"0"}}/>
              </span>
            </div>
            <div>
                <SimpleSlickSlider Products={mobileProducts}
                            // ProductsPics={SuperProductsPics}
                />
            </div>
        </section>
    )
}
export default CategorizedProducts;
