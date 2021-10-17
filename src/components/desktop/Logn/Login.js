import React from "react";
import classes from './Login.module.scss';
import digikalaLogo from '../../../assets/SVG/dg.png';
import {Button} from "react-bootstrap-buttons";


const Login=()=>{
    return(
        <div className={classes.Login}>
            <div>
                <img src={digikalaLogo} />
            </div>
            <p className={classes.RegisterLoginNote}>
                ورود / ثبت نام
            </p>
            <span>
                شماره موبایل یا ایمیل خود را وارد کنید
            </span>

            <div className="d-grid gap-2" >
                <input  style={{width:"85%"}} />

            </div>

            <div className="d-grid gap-2" >
                <Button variant="primary"  style={{width:"85%",backgroundColor:"#ef394e",color:"white"}}>
                    ورود به دیجی کالا
                </Button>
            </div>

            <p className={classes.note}>
                با ورود و یا ثبت نام در دیجی‌کالا شما شرایط و قوانین استفاده از سرویس های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید.
            </p>
        </div>
    )
}
export default Login;