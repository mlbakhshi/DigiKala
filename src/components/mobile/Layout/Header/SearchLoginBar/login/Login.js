import React from 'react';
import '../../../../../../assets/icon/style.css';
import classes from './Login.module.scss';
import {NavLink} from "react-router-dom";
const Login=()=>{
    return(
        <div className={classes.LoginBag}>
            <div className={classes.Login}>
                    <NavLink to="/login" style={{textDecoration:"none",color:"black"}}> <span className="icon-user"></span></NavLink>
            </div>
            <div className={classes.Cart}>
                <span class="icon-basket" style={{fontSize:"20px"}}></span>
            </div>
        </div>
    )
}
export default Login;
