import React, {useEffect, useState} from 'react';
import classes from './ProductDetail.module.scss';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import BrandPicture from "./BrandPicture/BrandPicture";
import Buy from "./Buy/Buy";
import SendPic from "../../../../assets/images/send.png";
import Express from "../../../../assets/SVG/1.png";
import Pay from "../../../../assets/SVG/2.png";
import Allday from "../../../../assets/SVG/3.png";
import Return from "../../../../assets/SVG/4.png";
import Orginal from "../../../../assets/SVG/5.png";
import {DetailProduct} from "../../../../redux/data/auth/apiFunction";
import Intro from "./Intro/Intro";
const ProductDetail=(props)=>{
    console.log(props);
    const [product,setProduct]=useState([]);
    let IDD=props.match.params.id;


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        window.scrollTo(0,0)
        let response=null;
        try {
            response=await DetailProduct(IDD);
        }catch (e){
            console.log('Error')
        }
        if(response?.success===true) {
            setProduct(response.data)
        }

    },[IDD])

    return(
        <Auxx>
            <Toolbar />
            <article className={classes.dataProduct}>

                <section className={classes.picGallery}>
                    <BrandPicture detail={product} />
                </section>
                <section className={classes.Notification}>
                    <div className={classes.Alamat}>
                        <i className="fa fa-exclamation"></i>
                    </div>
                    <div className={classes.Hoshdar}>

                        هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06
                        <br/>
                        امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.
                    </div>
                </section>

<section>
    <Intro flagbuy={props.flagbuy} detailProduct={product} />
</section>
                <section className={classes.Buy}>
                    <Buy detail={product}/>
                </section>
                <section className={classes.FreeSend}>
                    <div className={classes.Send}>
                        <div>
                            <i className='fa fa-truck' ></i>
                            ارسال رایگان سفارش
                        </div>
                        <span >
                        برای سفارش های بالای 300 هزار تومان
                    </span>
                    </div>
                    <div>
                        <img src={SendPic}/>
                    </div>
                </section>

            </article>

            <div className={classes.PNGLogo}>
                <div  >
                    <img src={Express}  />
                </div>
                <div >
                    <img src={Pay} />
                </div>
                <div  >
                    <img src={Allday}  />
                </div>
                <div >
                    <img src={Return}  />
                </div>
                <div  >
                    <img src={Orginal}  />
                </div>
            </div>

            <Footer />
        </Auxx>

    )
}
export default ProductDetail;