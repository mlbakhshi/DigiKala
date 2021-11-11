import React from 'react';
import '../../../../../../assets/icon/style.css';
import classes from './Login.module.scss';
import {Link, NavLink} from "react-router-dom";
import {loginAuthSuccess} from "../../../../../../redux/data/auth/actions";
import {WaitOrder} from "../../../../../../redux/data/ordersCount/actions";
import 'font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux";
const Login=(props)=>{
    const { auth,counter }  = props;

    if(!auth) {
        return (
            <div className={classes.LoginBag}>
                <div className={classes.NotLogin}>
                    <div className={classes.LoginSymbol}>
                        <i className="fa fa-sign-in"></i>

                    </div>
                    <div className={classes.In}>
                        <NavLink to="/login" > ورود</NavLink>
                    </div>
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

                    <div className={classes.Login}>
                        <Link to={"/profile"}>
                        <div>
                            <i className="fas fa-user-alt"></i>
                            <span className="icon-user" ></span>
                        </div>
                        </Link>
                    </div>

                </div>
                <div className={classes.Cart}>
                    <Link to={"/basket"}>
                        <div className={classes.CountNumber}>
                            <div className={classes.OrderCount}>
                                {counter}
                            </div>
                            <div>
                                <span className="icon-basket" ></span>
                            </div>
                        </div>
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
        counter:state.data.cntOrder.count,
        orders: state.data.cntOrder.orderProfile,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
  ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
        ACTION_Orders_SUCCESS: (data) => dispatch(WaitOrder(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
