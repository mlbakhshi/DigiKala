import React from "react";

import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import classes from './Slider.module.scss';
import slider1 from '../../../../../../assets/images/slider/1.jpg';
import slider2 from '../../../../../../assets/images/slider/2.jpg';
import slider3 from '../../../../../../assets/images/slider/3.jpg';
import slider4 from '../../../../../../assets/images/slider/4.jpg';
import slider5 from '../../../../../../assets/images/slider/5.jpg';
import slider6 from '../../../../../../assets/images/slider/6.jpg';
import slider7 from '../../../../../../assets/images/slider/7.jpg';
import slider8 from '../../../../../../assets/images/slider/8.jpg';
const Slider = () => {
    return (
        <div className={classes.divSlider}>
            <Carousel
                plugins={['rtl', 'arrows']}
            >

                <img src={slider1} className={classes.images} />
                <img src={slider2} className={classes.images} />
                <img src={slider3} className={classes.images}/>
                <img src={slider4} className={classes.images}/>
                <img src={slider5} className={classes.images}/>
                <img src={slider6} className={classes.images}/>
                <img src={slider7} className={classes.images}/>
                <img src={slider8} className={classes.images}/>

            </Carousel>
        </div>

    );
}

export default Slider;