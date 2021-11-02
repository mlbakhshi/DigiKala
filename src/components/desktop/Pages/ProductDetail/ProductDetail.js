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
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";

const ProductDetail=(props)=>{

    const [product,setProduct]=useState([]);
    let IDD=props.match.params.id;


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{

        let response=null;
        try {
            response=await DetailProduct(IDD);
        }catch (e){
            console.log('Error')
        }
        if(response?.success===true) {
            console.log(response.data)
            setProduct(response.data)
            console.log(response.data)
        }

        // console.log(response,"response");
        // console.log(response.data[0],"response");
        // setProduct(response.data[0]);
        // console.log(product,"product");


    },[])

    return(
        <Auxx>
            <Toolbar />
            <article className={classes.dataProduct}>

                <section className={classes.picGallery}>
                    <InnerImageZoom src={testimg} />
                </section>

                <section className={classes.Detail}>
                    <Intro  detailProduct={product}/>
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