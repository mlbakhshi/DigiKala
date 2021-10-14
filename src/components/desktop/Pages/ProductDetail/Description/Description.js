import React from "react";
import classes from './Description.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import 'font-awesome/css/font-awesome.min.css';
import NavigationFooterItem from "../../../Layout/Footer/NavigationFooteritem/NavigationFooteritem";
import '../../../../../assets/icon/style.css';
import SendPic from '../../../../../assets/images/send.png';


const Description=()=>{

    // const LikeFont = {
    //     color : "green"
    // };

    return(
        <Auxx>
            <div className={classes.DesEnglish}>
                Xiaomi POCO X3 Pro M2102J20SG Dual SIM 256GB And 8GB RAM Mobile Phone
            </div>
            <div className={classes.Like}>
                <div className={classes.LikeFont}>
                    <i className="fa fa-thumbs-o-up " />
                </div>
                ۸۹٪ (بیشتر از ۹۹۹ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
            </div>
            <div className={classes.Star}>
                <div className={classes.StarFont}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                ۴.۴
                (۴۸۶۰)
            </div>
            <div className={classes.Colors}>
                <div>
                    رنگ : مسی
                </div>
                <div className={classes.ColorList}>
                    <span className={classes.Dot} style={{backgroundColor:"#c77b30"}}></span>
                    <span className={classes.Dot} style={{backgroundColor:"#e65319"}}></span>
                    <span className={classes.Dot} style={{backgroundColor:"black"}}></span>
                    <span className={classes.Dot} style={{backgroundColor:"#2196f3"}}></span>
                </div>
            </div>
            <div className={classes.Parameters}>
                ویژگی های کالا
                <ul className={classes.ParametersList}>
                    <li>
                        حافظه داخلی:
                        256 گیگابایت
                    </li>
                    <li>
                        اندازه صفحه نمایش:
                        6.0 اینچ و بزرگتر
                    </li>
                    <li>
                        شبکه های ارتباطی:
                        4G، 3G، 2G
                    </li>
                </ul>
            </div>
            <div className={classes.Notification}>
                <div >
                    <i className="fa fa-exclamation"></i>
                </div>
                <div>

                    هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06
                    <br/>
                    امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.
                </div>

            </div>
            <div className={classes.DigiPlus}>
                <div style={{display:"flex"}} >
                    <span className="icon-Dg-plus" ></span>
                    خدمات ویژه کاربران دیجی پلاس
             <span style={{color:"blue",marginRight:"auto"}}>
                 هم اکنون عضو شوید
             </span>
                </div>
                <div className={classes.Notify}>
                    <span >
                      ارسال رایگان
                    </span>
                    <i className="fa fa-circle" />
                    <span>
                       امکان ارسال فوری
                    </span>
                </div>

            </div>
            <div className={classes.Send}>
                <div>
                    <div>
                        <i className='"fas fa-truck' style={{fontSize:"24px",color:"red"}}></i>
                        ارسال رایگان سفارش
                    </div>
                    <span >
                        برای سفارش های بالای 300 هزار تومان
                    </span>
                </div>
                <div>
                    <img src={SendPic}/>
                </div>
            </div>

        </Auxx>

    )
}
export default Description;
