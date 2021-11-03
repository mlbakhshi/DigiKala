import React, {useEffect, useState} from 'react';
import '../../../../../assets/icon/style.css';
import classes from './Login.module.scss';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {SuspendProducts} from "../../../../../redux/data/auth/apiFunction";
import {Dropdown} from "react-bootstrap";

const Login=(props)=>{
    const { auth,userId,counter }  = props;
    // const [numOrders,useNumOrder]=useState();
    // useEffect(async ()=>{
    //     let response=null;
    //     try {
    //
    //         response=await SuspendProducts(userId);
    //     }catch (e){
    //         console.log('Error')
    //     }
    //     // if(response?.success===true) {
    //     console.log(response)
    //
    //     // }
    // },[]);

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
        console.log(userId);
        return (
            <div className={classes.LoginBag}>
                <div className={classes.Login}>
                    <Dropdown  >
                        <Dropdown.Toggle className={classes.Drop} variant="success" id="dropdown-basic">
                            <span className="icon-user"></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{textAlign:"right"}}>
                            <Dropdown.Item  href="#/action-1">مشاهده حساب کاربری</Dropdown.Item>
                            <Link to={"/profile"}><Dropdown.Item  ><i className="fa fa-mobile-phone"></i> سفارش های من </Dropdown.Item></Link>
                            <Dropdown.Item  href="#/action-3"><i className="fa fa-sign-out"></i> خروج </Dropdown.Item>
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
        counter:state.data.cntOrder.count
    }
}
export default connect(mapStateToProps, null)(Login);
