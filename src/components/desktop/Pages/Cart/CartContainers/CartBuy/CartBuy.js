import React from "react";
import classes from './CartBuy.module.scss';
import SendPic from "../../../../../../assets/images/send.png";
import {Button} from "react-bootstrap-buttons";
const CartBuy=()=>{
    return(

        <div className={classes.BuyNotify}>
            <div className={classes.Buy} >
                <Button variant="primary"  style={{width:"95%",backgroundColor:"#ef394e",color:"white"}}>
                    ادامه فرآیند خرید
                </Button>
            </div>

            <p>
                کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش مراحل بعدی را تکمیل کنید.
            </p>

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
                <div className={classes.Image}>
                    <img src={SendPic}/>
                </div>
            </div>
        </div>
    )
}
export default CartBuy;