import React, {useEffect, useState} from "react";
import classes from './Login.module.scss';
import digikalaLogo from '../../../assets/SVG/dg.png';
import {Button} from "react-bootstrap-buttons";
import {DetailProduct, loginMember} from "../../../redux/data/auth/apiFunction";
import { connect } from 'react-redux';


async function loginUser(credentials) {
    return loginMember(credentials);
}

const Login=()=>{

    const [username, setUserName] = useState();

    const handleSubmit = async e => {
        console.log('login');
        e.preventDefault();
        const token = await loginUser({
            username
        });
        var store = Redux.createStore(counter)
        setToken(token);
    }


    return(
        <div className={classes.Login}>
            <div>
                <img src={digikalaLogo} />
            </div>
            <p className={classes.RegisterLoginNote}>
                ورود / ثبت نام
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="d-grid gap-2" >
                        <input  type="text"
                                placeholder={" شماره موبایل یا ایمیل خود را وارد کنید\n"}
                                onChange={e => setUserName(e.target.value)}
                        />

                    </div>
                </div>


                <div className="d-grid gap-2" >
                    <input type="submit" value="ورود به دیجی کالا"
                           style={{backgroundColor:"#ef394e",color:"white",border:"none",outline:"none",borderRadius:"2px"}}
                    />
                </div>
            </form>

            <p className={classes.note}>
                با ورود و یا ثبت نام در دیجی‌کالا شما شرایط و قوانین استفاده از سرویس های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید.
            </p>
        </div>
    )
}
export default Login;