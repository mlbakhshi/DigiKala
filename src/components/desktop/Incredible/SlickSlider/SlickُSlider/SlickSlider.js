import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../../../../../assets/icon/style.css';
import SliderComponent from "../../../SliderComponent/SliderComponent";

// import Pic1 from "../../../assets/images/incredibleSuper/1.jpg";
// import Pic2 from "../../../assets/images/incredibleSuper/2.jpg";
// import Pic3 from "../../../assets/images/incredibleSuper/3.jpg";
// import Pic4 from "../../../assets/images/incredibleSuper/4.jpg";
// import Pic5 from "../../../assets/images/incredibleSuper/5.jpg";
// import Pic6 from "../../../assets/images/incredibleSuper/6.jpg";



const SlickSlide=(props)=> {
    // const {SuperProductsPics}= props;
    const swiperParams = {
        slidesPerView: 3,
        grabCursor: true,
        loop: false,
        direction: 'horizontal',
        watchOverflow: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            },

            // when window width is <= 1024px
            1024: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 15
            },
        },
        containerClass: 'swiper-container promo',
        rebuildOnUpdate: true,
        shouldSwiperUpdate: true
    }
    let productInformation=props.Products.map(productInfo=>
        <SwiperSlide >
        <SliderComponent
            description={productInfo.description}
            digipay={productInfo.digipay}
            OffPercent={productInfo.OffPercent}
            OriginalPrice={productInfo.OriginalPrice}
            OffPrice={productInfo.OffPrice}
            src={productInfo.src}
        />
        </SwiperSlide>
    )
    return (

        <Swiper {...swiperParams}>
            {/*<SwiperSlide >*/}
                {productInformation}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide>*/}
            {/*    <SliderComponent productDiscription={props.Products[1]} SuperProductsPics={props.ProductsPics[1]} />*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide>*/}
            {/*        <SliderComponent productDiscription={props.Products[2]} SuperProductsPics={props.ProductsPics[2]} />*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide>*/}
            {/*       <SliderComponent productDiscription={props.Products[3]} SuperProductsPics={props.ProductsPics[3]}/>*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide>*/}
            {/*    <SliderComponent productDiscription={props.Products[4]} SuperProductsPics={props.ProductsPics[4]}/>*/}
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide>*/}
            {/*    <SliderComponent productDiscription={props.Products[5]} SuperProductsPics={props.ProductsPics[5]}/>*/}
            {/*</SwiperSlide>*/}

        </Swiper>

    );

}
export default SlickSlide;