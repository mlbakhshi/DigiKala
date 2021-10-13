import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../../../../../assets/icon/style.css';
import SimpleSliderComponent from "../../../SimpleSliderComponent/SimpleSliderComponent";

const SimpleSlickSlider=(props)=> {
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
        <SimpleSliderComponent
            mobilePic={productInfo.mobilePic}
            title={productInfo.title}
            price={productInfo.price}

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