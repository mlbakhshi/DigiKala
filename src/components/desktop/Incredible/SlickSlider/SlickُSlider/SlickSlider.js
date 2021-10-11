import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '../../../../../assets/icon/style.css';
import SliderComponent from "../../../SliderComponent/SliderComponent";

const SlickSlide=(props)=> {
    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide >
                <SliderComponent productDiscription={props.superProducts[0]} SuperProductsPics={props.SuperProductsPics[0]}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderComponent productDiscription={props.superProducts[1]} SuperProductsPics={props.SuperProductsPics[1]} />
            </SwiperSlide>
            <SwiperSlide>
                <SliderComponent productDiscription={props.superProducts[2]} SuperProductsPics={props.SuperProductsPics[2]} />
            </SwiperSlide>
            <SwiperSlide>
                <SliderComponent productDiscription={props.superProducts[3]} SuperProductsPics={props.SuperProductsPics[3]}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderComponent productDiscription={props.superProducts[4]} SuperProductsPics={props.SuperProductsPics[4]}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderComponent productDiscription={props.superProducts[5]} SuperProductsPics={props.SuperProductsPics[5]}/>
            </SwiperSlide>


        </Swiper>
    );

}
export default SlickSlide;