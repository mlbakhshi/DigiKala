import React, {useEffect} from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import "./../../assets/css/mobile/mobile.scss";
import classes from "../../App.module.css";
import ProductDetail from "../mobile/Pages/ProductDetail/ProductDetail";
import Cart from "../mobile/Pages/Cart/Cart";
import Main from "../mobile/Pages/main/main";
import Basket from "../mobile/Pages/Basket/basket";
import MyProfile from "../mobile/Layout/MyProfile/Profile/Myprofile";
import Logout from "../mobile/Layout/MyProfile/Logout/logout";
import Login from "./Logn/Login";
import MyOrders from "./Layout/MyProfile/Profile/MyOrders/MyOrders";
import Account from "./Layout/MyProfile/Profile/Account/account";


const Mobile = (props) => {


    return (


        <div className={classes.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/detail/:id"  component={ProductDetail}  />
                    <Route exact path="/cart/:id"    component={Cart} />
                    <Route path="/" exact component={Main} />
                    <Route exact path="/Login"   component={Login} />
                    <Route exact path="/basket"   component={Basket} />
                    <Route exact path="/profile"   component={MyProfile} />
                    <Route exact path="/logout"   component={Logout} />
                    <Route exact path="/MyOrders"   component={MyOrders} />
                    <Route exact path="/Account"   component={Account} />

                </Switch>
            </BrowserRouter>

        </div>
    );

};


export default Mobile;

