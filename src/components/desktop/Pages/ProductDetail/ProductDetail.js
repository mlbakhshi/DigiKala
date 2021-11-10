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
import Snipper from "../../../../common/snipper/snipper";
import {Spinner} from "react-bootstrap";

const ProductDetail=(props)=>{
    let IDD=null;
    const [product,setProduct]=useState([]);
    const [loding,setLoading]=useState(false);
    if(props.flagbuy!==true){
         IDD=props.match.params.id;
    }
    else {
         IDD=props.id;
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        window.scrollTo(0,0)
        let response=null;
        setLoading(true)
        try {
            response=await DetailProduct(IDD);
        }catch (e){
            console.log('Error')
        }
        setLoading(false)
        if(response?.success===true) {
            setProduct(response.data)
        }


    },[IDD])



    return(
        <Auxx>
            <Toolbar />
            <article className={classes.dataProduct}>

                <section className={classes.picGallery}>
                    {!loding&&<InnerImageZoom src={testimg} />}
                    {loding&&<Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                </section>

                <section className={classes.Detail}>
                    {!loding&&<Intro  flagbuy={props.flagbuy} detailProduct={product}/>}
                    {loding&&
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    }
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