import React, {useEffect, useState} from 'react';
import classes from './ProductDetail.module.scss';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import BrandPicture from "./BrandPicture/BrandPicture";
import Buy from "./Buy/Buy";
import SendPic from "../../../../assets/images/send.png";
import {ReactComponent as Express} from "../../../../assets/images/footer/1.svg";
import  {ReactComponent as Pay} from "../../../../assets/images/footer/2.svg";
import  {ReactComponent as Allday} from "../../../../assets/images/footer/3.svg";
import  {ReactComponent as Return} from "../../../../assets/images/footer/4.svg";
import  {ReactComponent as Orginal} from "../../../../assets/images/footer/5.svg";
import {DetailProduct} from "../../../../redux/data/auth/apiFunction";
import Intro from "./Intro/Intro";
import InnerImageZoom from "react-inner-image-zoom";
import testimg from "../../../../assets/images/mobilePics/Samsung A12.jpg";
import {Spinner} from "react-bootstrap";
import ImageZoom from "../../../desktop/Pages/ProductDetail/ImageZoom/ImageZoom";
const ProductDetail=(props)=>{
    let IDD=null;
    const [loding,setLoading]=useState(false);
    const [product,setProduct]=useState([]);
    if(props.flagbuy!==true){
        IDD=props.match.params.id;
    }
    else {
        IDD=props.id;
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        window.scrollTo(0,0)
        let response=null;
        setLoading(true)
        try {
            response=await DetailProduct(IDD);
        }catch (e){
            console.log('Error')
        }
        setLoading(false)
        if(response?.success===true) {
            setProduct(response.data)
        }

    },[IDD])

    return(
        <Auxx>
            <Toolbar />
            <article className={classes.dataProduct}>

                <section className={classes.picGallery}>
                    {!loding&&product?.ProductPicture&&<BrandPicture detail={product} />}
                    {loding&&<Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
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
    {!loding&&<Intro  detailProduct={product} />}
    {loding&&<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>}

</section>
                <section className={classes.Buy}>
                    <Buy  flagbuy={props.flagbuy} detail={product}/>
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
                <div className={classes.Pic1}  >
                    <Express />
                    <div>
                       <span>
                                           تحویل اکسپرس
                    </span>
                    </div>

                </div>
                <div >
                    <Return />
                    <div>
                         <span>
7 روز ضمانت بازگشت کالا
                    </span>
                    </div>

                </div>
                {/*<div  >*/}
                {/*    <Allday/>*/}
                {/*    /!*<img src={Allday}  />*!/*/}
                {/*</div>*/}
                <div >
                    <Pay/>
                    <div>
                         <span>
پرداخت در محل
                    </span>
                    </div>

                </div>
                <div  >
                    <Orginal />
                    <div>
                        <span>
ضمانت اصل بودن کالا
                    </span>
                    </div>

                </div>
            </div>

            <Footer />
        </Auxx>

    )
}
export default ProductDetail;