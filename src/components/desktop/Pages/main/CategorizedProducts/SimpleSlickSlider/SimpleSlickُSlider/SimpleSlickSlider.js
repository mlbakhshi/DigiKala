import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SimpleSliderComponent from "../../../SimpleSliderComponent/SimpleSliderComponent";

const SimpleSlickSlider=(props)=> {
    // const {SuperProductsPics}= props;
    const swiperParams = {
        slidesPerView: 5,
        grabCursor: true,
        loop: false,
        direction: 'horizontal',
        watchOverflow: true,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
           // when window width is <= 1024px
            1024: {
                slidesPerView: 5,
                spaceBetween: 15
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 15
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
    let productInformation=null;
    if(props.Products) {
        productInformation = props.Products.map(productInfo =>
            <SwiperSlide>
                <SimpleSliderComponent
                    id={productInfo.ID}
                    mobilePic={"C:/react/digikala/Upload/1624873752.jpg"}
                    title={productInfo.ProductTitle}
                    price={productInfo.ProductPrice}

                />
            </SwiperSlide>
        )
    }
    return (

        <Swiper {...swiperParams}>

                {productInformation}

        </Swiper>

    );

}
export default SimpleSlickSlider;