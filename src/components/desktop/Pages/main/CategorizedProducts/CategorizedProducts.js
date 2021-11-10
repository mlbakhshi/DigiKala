import React, {useEffect, useState} from 'react';
import classes from './CategorizedProducts.module.scss';
import SimpleSlickSlider from "./SimpleSlickSlider/SimpleSlickُSlider/SimpleSlickSlider";
import {MobileProducts} from "../../../../../redux/data/auth/apiFunction";
import ProductDetail from "../../ProductDetail/ProductDetail";
import {Spinner} from "react-bootstrap";


const CategorizedProducts=(props)=>{

    const [products,setProducts]=useState([]);
    const [loding,setLoading]=useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        let response=null;
        setLoading(true)
        try {
            response=await MobileProducts();

        }catch (e){
            console.log('Error')
        }
        setLoading(false)
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


                    {!loding&& <SimpleSlickSlider Products={products}/>}
                    {loding&&<Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}


                </div>
            </section>

        );

}
export default CategorizedProducts;
