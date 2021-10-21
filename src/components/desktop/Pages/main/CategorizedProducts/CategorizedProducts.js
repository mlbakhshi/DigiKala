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

            // console.log(response,'CategorizedProducts');
        }catch (e){
            console.log('Error')
        }

        console.log(response);
        // if(response?.success===true) {
             console.log('true');
            setProducts(response);
            console.log(products);
        // }
        // else{
        //     console.log('false');
        // }

    },[])



    // if(Upload.length > 0) {
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
                    <SimpleSlickSlider Products={products}
                        // ProductsPics={SuperProductsPics}
                    />
                </div>
            </section>

        );
    // } else {
    //     return (<> Loading ... </> )
    // }

}
export default CategorizedProducts;
