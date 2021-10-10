import React, { Component } from "react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import pic1 from './../../../../../assets/images/incredibleSuper/1.jpg';
import pic2 from './../../../../../assets/images/incredibleSuper/2.jpg';
import pic3 from './../../../../../assets/images/incredibleSuper/3.jpg';
import pic4 from './../../../../../assets/images/incredibleSuper/4.jpg';
import pic5 from './../../../../../assets/images/incredibleSuper/5.jpg';
import pic6 from './../../../../../assets/images/incredibleSuper/6.jpg';


const SlickSlider =()=> {
   return(
       <div>
           {/*<Carousel*/}
           {/*    plugins={[*/}
           {/*        'arrows',*/}
           {/*        {*/}
           {/*            resolve: slidesToShowPlugin,*/}
           {/*            options: {*/}
           {/*                numberOfSlides: 3*/}
           {/*            }*/}
           {/*        },*/}
           {/*    ]}*/}
           {/*    breakpoints={{*/}
           {/*        640: {*/}
           {/*            plugins: [*/}
           {/*                {*/}
           {/*                    resolve: slidesToShowPlugin,*/}
           {/*                    options: {*/}
           {/*                        numberOfSlides: 1*/}
           {/*                    }*/}
           {/*                },*/}
           {/*            ]*/}
           {/*        },*/}
           {/*        900: {*/}
           {/*            plugins: [*/}
           {/*                {*/}
           {/*                    resolve: slidesToShowPlugin,*/}
           {/*                    options: {*/}
           {/*                        numberOfSlides: 2*/}
           {/*                    }*/}
           {/*                },*/}
           {/*            ]*/}
           {/*        }*/}
           {/*    }}*/}
           {/*>*/}
               <img src={pic1} />
               <img src={pic2} />
               <img src={pic3} />
               <img src={pic4} />
               <img src={pic5} />
               <img src={pic6} />
           {/*</Carousel>*/}
       </div>
       )

}
export default SlickSlider;