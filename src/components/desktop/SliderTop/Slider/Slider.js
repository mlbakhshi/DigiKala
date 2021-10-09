import React from 'react';

import slider1 from "./../../../../assets/images/slider/1.jpg";
import slider2 from "./../../../../assets/images/slider/2.jpg";
import slider3 from "./../../../../assets/images/slider/3.jpg";
import slider4 from "./../../../../assets/images/slider/4.jpg";
import slider5 from "./../../../../assets/images/slider/5.jpg";
import slider6 from "./../../../../assets/images/slider/6.jpg";
import slider7 from "./../../../../assets/images/slider/7.jpg";
import slider8 from "./../../../../assets/images/slider/8.jpg";

const Slider=()=>{
    return(
        <div style={{paddingLeft:"15px",height:"100%"}}>
            <section style={{height:"100%"}}>
                {/*<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">*/}
                {/*    <ol className="carousel-indicators">*/}
                {/*        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>*/}
                {/*        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>*/}
                {/*        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>*/}
                {/*    </ol>*/}
                {/*    <div className="carousel-inner">*/}
                {/*        <div className="carousel-item active">*/}
                {/*            <img src={slider1} className="d-block w-100" alt="..." />*/}
                {/*        </div>*/}
                <div className="carousel-item">
                    <img src={slider2} style={{width:"100%",borderRadius:"20px"}} alt="..." />
                </div>
                {/*        <div className="carousel-item">*/}
                {/*            <img src={slider3} className="d-block w-100" alt="..." />*/}
                {/*        </div>*/}
                {/*        <div className="carousel-item">*/}
                {/*            <img src={slider4} className="d-block w-100" alt="..." />*/}
                {/*        </div>*/}
                {/*        <div className="carousel-item">*/}
                {/*            <img src={slider5} className="d-block w-100" alt="..." />*/}
                {/*        </div>*/}
                {/*        <div className="carousel-item">*/}
                {/*            <img src={slider6} className="d-block w-100" alt="..." />*/}
                {/*        </div>*/}
                {/*        <div className="carousel-item">*/}
                {/*            <img src={slider7} className="d-block w-100" alt="..." />*/}
                {/*        </div>*/}
                {/*        <div className="carousel-item">*/}
                {/*            <img src={slider8} className="d-block w-100" alt="..." />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">*/}
                {/*        <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                {/*        <span className="sr-only">Previous</span>*/}
                {/*    </a>*/}
                {/*    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">*/}
                {/*        <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                {/*        <span className="sr-only">Next</span>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </section>
        </div>
    )
}
export default Slider;

