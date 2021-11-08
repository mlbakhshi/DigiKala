import React, { useState} from "react";
import classes from './Login.module.scss';
import digikalaLogo from '../../../assets/SVG/dg.png';
import { loginMember} from "../../../redux/data/auth/apiFunction";
import {Redirect, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {loginAuthSuccess} from "../../../redux/data/auth/actions";
import {WaitOrder} from "../../../redux/data/ordersCount/actions";

async function loginUser(credentials) {
    return loginMember(credentials);
}


const Login=(props)=>{
    const { ACTION_login_SUCCESS}  = props;
    const [username, setUserName] = useState();
    const history = useHistory();
    const handleSubmit = async e => {
        e.preventDefault();
        const checkToken = await loginUser({username});
        console.log(checkToken);
        console.log(checkToken.data.id);
       let id=checkToken.data.id;
        setUserName(checkToken.data.username);
        if(checkToken.success){
            ACTION_login_SUCCESS(checkToken.data)

            if(window.location.pathname==="/login"){
                return (
                   history.goBack()
                )
            }
            else{
                const currentURL= window.location.href;
                console.log(currentURL);
                return(
                    <Redirect to="currentURL"  />
                )
            }

        }
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
                    <input type="submit"
                           // onClick={ACTION_login_SUCCESS()}
                           value="ورود به دیجی کالا"
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


const mapDispatchToProps = (dispatch) => {
    return {
        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
    }
}

export default connect(null, mapDispatchToProps)(Login);