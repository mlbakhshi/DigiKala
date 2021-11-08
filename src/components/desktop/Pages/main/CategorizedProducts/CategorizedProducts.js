import React, {useEffect, useState} from 'react';
import classes from './CategorizedProducts.module.scss';
import SimpleSlickSlider from "./SimpleSlickSlider/SimpleSlickُSlider/SimpleSlickSlider";
import {MobileProducts} from "../../../../../redux/data/auth/apiFunction";


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
            setProducts(response);
    },[])

        return (

            <section className={classes.Category}>
                <div >
              <span >
                 <h6 >
                     گوشی موبایل
                 </h6>
                  <hr style={{backgroundColor: "red",width:"10%",marginRight:"0"}}/>
              </span>
                </div>
                <div>
                    <SimpleSlickSlider Products={products}/>
                </div>
            </section>

        );

}
export default CategorizedProducts;
