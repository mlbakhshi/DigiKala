import React, {useEffect, useState} from "react";
import classes from './Login.module.scss';
import digikalaLogo from '../../../assets/SVG/dg.png';
import {Button} from "react-bootstrap-buttons";
import {AllOrders, loginMember} from "../../../redux/data/auth/apiFunction";
import {Redirect, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {loginAuthSuccess} from "../../../redux/data/auth/actions";
import {WaitOrder} from "../../../redux/data/ordersCount/actions";

async function loginUser(credentials) {
    return loginMember(credentials);
}
async function orders(credentials) {
    console.log(credentials)
    return AllOrders(credentials);
}

const Login=(props)=>{
    const { ACTION_login_SUCCESS,auth,ACTION_Waiting_SUCCESS }  = props;
    const [username, setUserName] = useState();
    const [userid,setUserid] = useState("0");
    const history = useHistory();
    const handleSubmit = async e => {
        e.preventDefault();
        const checkToken = await loginUser({username});
        console.log(checkToken);
        console.log(checkToken.data.id);
       let id=checkToken.data.id;
        setUserName(checkToken.data.username);
        // setUserid(id);
        // console.log(userid);
        // console.log(username);
        if(checkToken.success){
            {ACTION_login_SUCCESS(checkToken.data.id)}
console.log(id);
            //fetch orders from DB
                const checkOrders = await orders({id});
            // if(checkOrders.success){
console.log(checkOrders);
                // {ACTION_Waiting_SUCCESS(checkToken.data)}
            // }
            if(window.location.pathname==="/login"){
                console.log(window.location.pathname)
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

        // dispatching actions returned by action creators
        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
        ACTION_Waiting_SUCCESS: (data) => dispatch(WaitOrder(data)),
        // reset: () => dispatch(reset()),

    }
}

export default connect(null, mapDispatchToProps)(Login);