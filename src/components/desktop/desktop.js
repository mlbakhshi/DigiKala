import React from "react";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import "./../../assets/css/desktop/desktop.scss";
import classes from "../../App.module.css";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import Main from "./Pages/main/main";
import Login from "./Logn/Login";
import Basket from "./Pages/Basket/basket";
import MyProfile from "./Layout/MyProfile/Profile/Myprofile";
import account from "./Layout/MyProfile/Account/account";
import Logout from "./Layout/MyProfile/Logout/logout";

const Desktop = (props) => {


    return (
        <div className={classes.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"  ><Main/> </Route>
                    <Route exact path="/detail/:id"  component={ProductDetail}  />
                    <Route exact path="/cart/:id"    component={Cart} />
                    <Route exact path="/Login"   component={Login} />
                    <Route exact path="/basket"   component={Basket} />
                    <Route exact path="/profile"   component={MyProfile} />
                    <Route exact path="/account"   component={account} />
                    <Route exact path="/logout"   component={Logout} />

                </Switch>
            </BrowserRouter>
        </div>
    );

};


export default withRouter( Desktop);

