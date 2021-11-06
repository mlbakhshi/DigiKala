import React, {useEffect, useState} from 'react';
import classes from './CategorizedProducts.module.scss';
import SimpleSlickSlider from "./SimpleSlickSlider/SimpleSlickُSlider/SimpleSlickSlider";
import {MobileProducts} from "../../../../../redux/data/auth/apiFunction";

import pic1 from '../../../../../assets/images/mobilePics/Poco x3.jpg';
import pic2 from '../../../../../assets/images/mobilePics/Pco m3.jpg';
import pic3 from '../../../../../assets/images/mobilePics/Galaxy S20.jpg';
import pic4 from '../../../../../assets/images/mobilePics/iPhone 12.jpg';
import pic5 from '../../../../../assets/images/mobilePics/iPhone 12 Pro.jpg';
import pic6 from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import pic7 from '../../../../../assets/images/mobilePics/Samsung A12.jpg';

const CategorizedProducts=(props)=>{

    const [products,setProducts]=useState([]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        let response=null;
        try {
            response=await MobileProducts();

        }catch (e){
            console.log('Error')
        }
        console.log(response);
        setProducts(response);

    },[])


    // if(Upload.length > 0) {
        return (

            <section className={classes.Category}>
                <div >
              <span >
                     گوشی موبایل
                  <hr style={{backgroundColor: "red",width:"20%",marginRight:"0"}}/>
              </span>
                </div>
                <div>
                    <SimpleSlickSlider
                        Products={products}
                        // ProductsPics={SuperProductsPics}
                    />
                </div>
            </section>
        )
}
export default CategorizedProducts;
