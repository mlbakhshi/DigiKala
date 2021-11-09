import React, {useEffect, useState} from 'react';
import classes from './ProductDetail.module.scss';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import testimg from '../../../../assets/images/mobilePics/Samsung A12.jpg';
import Intro from "./Intro/Intro";
import CategorizedProducts from "../main/CategorizedProducts/CategorizedProducts";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import {DetailProduct} from "../../../../redux/data/auth/apiFunction";

const ProductDetail=(props)=>{
    let IDD=null;
    let picturePath=null;
    const [product,setProduct]=useState([]);
    if(props.flagbuy!==true){
         IDD=props.match.params.id;
    }
    else {
         IDD=props.id;
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{

        let response=null;
        try {
            response=await DetailProduct(IDD);
        }catch (e){
            console.log('Error')
        }
        if(response?.success===true) {
            setProduct(response.data)
        }

    },[])



    return(
        <Auxx>
            <Toolbar />
            <article className={classes.dataProduct}>

                <section className={classes.picGallery}>
                    <InnerImageZoom src={testimg} />
                </section>

                <section className={classes.Detail}>
                    <Intro  flagbuy={props.flagbuy} detailProduct={product}/>
                </section>
            </article>
            <section className={classes.Suggestion}>
                <CategorizedProducts />
            </section>
            <Footer />
        </Auxx>

    )
}
export default ProductDetail;