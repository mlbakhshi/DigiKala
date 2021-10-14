import React from 'react';
import '../../../../../assets/icon/style.css';
import classes from './Login.module.css';
import {NavLink} from "react-router-dom";
const Login=()=>{
    return(
        <div className={classes.LoginBag}>
            <div className={classes.Login}>
                <span class="icon-user"></span>
                    <NavLink to="/login" style={{textDecoration:"none"}}> ورود به حساب کاربری</NavLink>
            </div>
            <div className={classes.Cart}>
                <span class="icon-basket" style={{fontSize:"20px"}}></span>
            </div>
        </div>
    )
}
export default Login;
