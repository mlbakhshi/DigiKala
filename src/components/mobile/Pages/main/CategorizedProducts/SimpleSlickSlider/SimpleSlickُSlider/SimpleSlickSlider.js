import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SimpleSliderComponent from "../../../SimpleSliderComponent/SimpleSliderComponent";

const SimpleSlickSlider=(props)=> {
    const swiperParams = {
        slidesPerView: 2,
        grabCursor: true,
        loop: false,
        direction: 'horizontal',
        watchOverflow: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        },
        containerClass: 'swiper-container promo',
        rebuildOnUpdate: true,
        shouldSwiperUpdate: true
    }
    console.log(props.Products)
    let productInformation=props.Products.map(productInfo=>
        <SwiperSlide >
        <SimpleSliderComponent
            id={productInfo.ID}
            mobilePic={productInfo.ProductPicture}
            title={productInfo.ProductTitle}
            price={productInfo.ProductPrice}

        />
        </SwiperSlide>
    )
    return (

        <Swiper {...swiperParams}>

                {productInformation}

        </Swiper>

    );

}
export default SimpleSlickSlider;