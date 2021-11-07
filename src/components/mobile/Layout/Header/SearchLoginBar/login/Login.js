import React, {useEffect} from 'react';
import '../../../../../../assets/icon/style.css';
import classes from './Login.module.scss';
import {Link, NavLink} from "react-router-dom";
import {AllOrders} from "../../../../../../redux/data/auth/apiFunction";
import {Dropdown} from "react-bootstrap";
import {loginAuthSuccess} from "../../../../../../redux/data/auth/actions";
import {WaitOrder} from "../../../../../../redux/data/ordersCount/actions";
import 'font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux";
const Login=(props)=>{
    const { auth,userId,counter,orders,ACTION_Orders_SUCCESS }  = props;

    useEffect(async ()=>{
        //fetch orders from DB
        let checkOrders=null;

        try{
            checkOrders = await AllOrders(userId);
        }
        catch (e){
            console.log('Error')
        }
        if(checkOrders?.success===true){
            console.log(checkOrders);
            console.log( ACTION_Orders_SUCCESS(checkOrders.data))
            ACTION_Orders_SUCCESS(checkOrders.data);
        }
    },[]);

    if(!auth) {
        return (
            <div className={classes.LoginBag}>
                <div className={classes.NotLogin}>
                    <div>
                        <i className="fa fa-sign-in"></i>

                    </div>
                    <div>
                        <NavLink to="/login" style={{textDecoration: "none",color:"black"}}> ورود</NavLink>
                    </div>
                </div>
                <div className={classes.Cart}>
                    <span class="icon-basket" style={{fontSize: "20px"}}></span>
                </div>
            </div>
        )
    }
    else {
        console.log(orders);
        return (
            <div className={classes.LoginBag}>
                <div className={classes.Login}>

                    <div className={classes.NotLogin}>
                        <Link to={"/profile"}>
                        <div>
                            <i className="fas fa-user-alt"></i>
                            <span className="icon-user" ></span>
                        </div>
                        </Link>
                    </div>

                    {/*<Dropdown  >*/}
                    {/*    <Dropdown.Toggle className={classes.Drop} variant="success" id="dropdown-basic">*/}
                    {/*        <span className="icon-user"></span>*/}
                    {/*    </Dropdown.Toggle>*/}

                    {/*    <Dropdown.Menu style={{textAlign:"right"}}>*/}
                    {/*        <Dropdown.Item  href="/account">مشاهده حساب کاربری</Dropdown.Item>*/}
                    {/*        <Dropdown.Item  href="/profile"><i className="fa fa-mobile-phone"></i> سفارش های من </Dropdown.Item>*/}
                    {/*        <Dropdown.Item  href="/logout"><i className="fa fa-sign-out"></i> خروج </Dropdown.Item>*/}
                    {/*    </Dropdown.Menu>*/}
                    {/*</Dropdown>*/}

                </div>
                <div className={classes.Cart}>
                    <Link to={"/basket"}>
                        <div className={classes.CountNumber}>
                            <div className={classes.OrderCount}>
                                {orders.length}
                            </div>
                            <div>
                                <span className="icon-basket" style={{fontSize: "20px"}}></span>
                            </div>
                        </div>
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
        ACTION_Orders_SUCCESS: (data) => dispatch(WaitOrder(data)),
        // reset: () => dispatch(reset()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
