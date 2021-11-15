import React, {useEffect, useState} from 'react';
import classes from './ProductDetail.module.scss';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Intro from "./Intro/Intro";
import CategorizedProducts from "../main/CategorizedProducts/CategorizedProducts";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import {DetailProduct} from "../../../../redux/data/auth/apiFunction";
import {Spinner} from "react-bootstrap";
import ImageZoom from "./ImageZoom/ImageZoom";
import ScrollAttribute from "./ScrollAttribute/ScrollAttribute";

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

                    <div className={classes.Image}>
                        {!loding&&product?.ProductPicture&&<ImageZoom ProductPicture={product.ProductPicture} />}
                        {loding&&<Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                    </div>
                    <div className={classes.Namad}>
                        <ul style={{ listStyleType: "none"}}>
                            <li>
                                <i className='fa fa-heart'></i>
                            </li>
                            <li>
                                <i className="fa fa-share-alt"></i>
                            </li>
                            <li>
                                <i className="fa fa-line-chart"></i>
                            </li>
                            <li>
                                <i className='fa fa-bell'></i>
                            </li>
                        </ul>
                    </div>
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
{/*<section >*/}
{/*    <ScrollAttribute/>*/}
{/*</section>*/}

            <section className={classes.Suggestion}>
                <CategorizedProducts />
            </section>
            <Footer />
        </Auxx>

    )
}
export default ProductDetail;