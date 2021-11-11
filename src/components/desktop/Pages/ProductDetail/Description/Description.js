import React, {useState} from "react";
import classes from './Description.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import 'font-awesome/css/font-awesome.min.css';
import '../../../../../assets/icon/style.css';
import SendPic from '../../../../../assets/images/send.png';

const RadioInput = ({label, value, checked, setter}) => {
    return (
        <label>
            <input type="radio" checked={checked == value}
                   onChange={() => setter(value)} />
            <span>{label}</span>
        </label>
    );
};
const Description=(props)=>{

    const [color, setColor] = React.useState();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {color};
        const json = JSON.stringify(data, null, 4);
        // console.clear();
        // console.log(json);
        setColor(json);
    };
return(
    <Auxx>
        <div className={classes.DesEnglish}>
            {props.detailProduct.detailProduct.detailProduct.ProductNameEn}
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
                رنگ :
                {color }

            </div>
            <form onSubmit={handleSubmit}>
            <div className={classes.ColorList}>

                <label>
                    <div className={classes.Radio} >
                        <RadioInput  value="مسی" checked={color} setter={setColor}  />
                    </div>
                   <div>
                      <span className={classes.Dot}
                            style={{backgroundColor:"#c77b30"}} >

                        </span>
                   </div>


                </label>

                <label>
                    <div className={classes.Radio}>
                    <RadioInput  value="قرمز" checked={color} setter={setColor}  />
                    </div>
                    <div>
                    <span className={classes.Dot}
                          style={{backgroundColor:"#e65319"}} >

                        </span>
                    </div>
                </label>
                <label>
                    <div className={classes.Radio}>
                    <RadioInput  value="مشکی" checked={color} setter={setColor}  />
                    </div>
                    <div>
                    <span className={classes.Dot}
                          style={{backgroundColor:"#000"}} >

                        </span>
                    </div>

                </label>
                <label>
                    <div className={classes.Radio}>
                    <RadioInput  value="آبی" checked={color} setter={setColor}  />
                    </div>
                    <div>
                    <span className={classes.Dot}
                          style={{backgroundColor:"#2196f3"}} >

                        </span>
                    </div>
                </label>


            </div>
            </form>
        </div>
        <div className={classes.Parameters}>
            ویژگی های کالا
            <ul className={classes.ParametersList}>
                <li>
                    حافظه داخلی:
                    {props.detailProduct.detailProduct.detailProduct.ProRam}
                </li>
                <li>
                    نوع صفحه نمایش:
                    {props.detailProduct.detailProduct.detailProduct.ProLCD}
                </li>
                <li>
                    شبکه های ارتباطی:
                    {props.detailProduct.detailProduct.detailProduct.ProNetwork}
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
                    <i className='fa fa-truck' style={{fontSize:"24px",color:"red"}}></i>
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
