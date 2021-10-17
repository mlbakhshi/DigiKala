import React from 'react';
import classes from './ProductDetail.module.scss';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import testimg from '../../../../assets/images/mobilePics/Samsung A12.jpg';
import Intro from "./Intro/Intro";
import CategorizedProducts from "../main/CategorizedProducts/CategorizedProducts";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
const ProductDetail=()=>{
    return(
        <Auxx>
            <Toolbar />
            <article className={classes.dataProduct}>

                <section className={classes.picGallery}>
                    <InnerImageZoom src={testimg} />
                </section>

                <section className={classes.Detail}>
                    <Intro />
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