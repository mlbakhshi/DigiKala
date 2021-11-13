import React from 'react';
import '../../../../../assets/icon/style.css';
import classes from './Login.module.scss';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Dropdown} from "react-bootstrap";
import {loginAuthSuccess} from "../../../../../redux/data/auth/actions";
import { ReactComponent as YourSvg } from '../../../../../assets/images/userImageDefault.svg';

const Login=(props)=>{
    const { auth,counter,userdata }  = props;

    if(!auth) {
        return (
            <div className={classes.LoginBag}>
                <div className={classes.NotLogin}>

                    <span class="icon-user"></span>
                    <NavLink to="/login" style={{textDecoration: "none"}}> ورود به حساب کاربری</NavLink>
                </div>
                <div className={classes.Cart}>
                    <span class="icon-basket" ></span>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={classes.LoginBag}>
                <div className={classes.Login}>
                    <Dropdown  >
                        <Dropdown.Toggle className={classes.Drop} variant="light" id="dropdown-basic">
                            <span className="icon-user"></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{textAlign:"right"}}>
                            <Dropdown.Item  href="/account">
                                <div className={classes.UserPic}>
                                    <div className={classes.PicUser}>
                                        <YourSvg />
                                    </div>
                                    <div className={classes.UserName}>
                                        {userdata.FirstName}{userdata.LastName}
                                        <div className={classes.See}>
                                            مشاهده حساب کاربری
                                        </div>
                                    </div>

                                </div>

                            </Dropdown.Item>
                            <Dropdown.Item  href="/profile"><span className={classes.MyOrders}> <i className="fa fa-mobile-phone"></i></span> سفارش های من </Dropdown.Item>
                            <Dropdown.Item  href="/logout"><span className={classes.Exit}><i className="fa fa-sign-out"></i></span> خروج </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={classes.Cart}>
                    <Link to={"/basket"}>
                        <div className={classes.CountNumber}>
                            {counter}
                        </div>
                        <span className="icon-basket" ></span>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return {

        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        userdata:state.data.auth.userdata,
        counter:state.data.cntOrder.count,
        orders: state.data.cntOrder.orderProfile,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        // dispatching actions returned by action creators
        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
