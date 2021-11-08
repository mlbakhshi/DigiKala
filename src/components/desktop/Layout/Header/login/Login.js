import React from 'react';
import '../../../../../assets/icon/style.css';
import classes from './Login.module.scss';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Dropdown} from "react-bootstrap";
import {loginAuthSuccess} from "../../../../../redux/data/auth/actions";

const Login=(props)=>{
    const { auth,counter }  = props;

    if(!auth) {
        return (
            <div className={classes.LoginBag}>
                <div className={classes.NotLogin}>

                    <span class="icon-user"></span>
                    <NavLink to="/login" style={{textDecoration: "none"}}> ورود به حساب کاربری</NavLink>
                </div>
                <div className={classes.Cart}>
                    <span class="icon-basket" style={{fontSize: "20px"}}></span>
                </div>
            </div>
        )
    }
    else {
        console.log(counter);
        return (
            <div className={classes.LoginBag}>
                <div className={classes.Login}>
                    <Dropdown  >
                        <Dropdown.Toggle className={classes.Drop} variant="success" id="dropdown-basic">
                            <span className="icon-user"></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{textAlign:"right"}}>
                            <Dropdown.Item  href="/account">مشاهده حساب کاربری</Dropdown.Item>
                           <Dropdown.Item  href="/profile"><i className="fa fa-mobile-phone"></i> سفارش های من </Dropdown.Item>
                            <Dropdown.Item  href="/logout"><i className="fa fa-sign-out"></i> خروج </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={classes.Cart}>
                    <Link to={"/basket"}>
                    <div className={classes.CountNumber}>
                        {counter}
                    </div>
                    <span className="icon-basket" style={{fontSize: "20px"}}></span>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    console.log(state,"dfgfgdfgfgdfg");
    return {

        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
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
