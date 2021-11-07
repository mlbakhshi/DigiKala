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
// import {checkLogin, isLogin} from "../../common/helpers/authHelper";
// import LoadingIndicator from "../../common/components/loadingIndicator/loadingIndicator";
// import Helmet from "react-helmet";
// import {getMetaTags} from "../../common/constants/ceo";
// import {getMobileLayout} from "../../common/helpers/layoutHelper";
// import SideAlertDialog from "./pages/components/common/sideAlertDialog/sideAlertDialog";
// import {getWebviewVersion, isInApp, isInSadApp, isInSadWeb} from "../../common/helpers/appHelper";
// import FixedMenu from "./pages/components/common/fixedMenu/FixedMenu";
// import {bindActionCreators} from "redux";
// import {uiIndexActions} from "../../redux/ui/index/index";
// import {dataChargeActions} from "../../redux/data/charge";
// import {dataInternetActions} from "../../redux/data/internet";
// import {dataCommonActions} from "../../redux/data/common";
// import {checkBrowser} from "../../common/helpers/browserHelper";
// import NetworkDetector from "./pages/components/common/networkDetector/NetworkDetector";
// import NotSupported from "./pages/components/app/notSupported/notSupported";
// import AndroidUpdateWebviewBar from "./pages/components/app/androidUpdateWebviewBar/androidUpdateWebviewBar";
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Mobile = (props) => {
    // const {MinVersionAndroid=16} = props.commonState?.AppSettings || {};
    //
    // useEffect(() => {
    //     if (isInApp() && document.body) {
    //         document.body.classList.add('no-select')
    //     }
    //
    //     props.dataChargeActions.clearChargeBuyProps();
    //     props.dataInternetActions.clearInternetBuyProps();
    //
    //     if (isInApp()) props.dataCommonActions.getAppSettings();
    //     if (!isInApp()) props.dataCommonActions.getSiteSettings();
    //
    //     !isInApp() && checkBrowser();
    //
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    //
    // let loginStatus = checkLogin(props);
    //
    // if (loginStatus.redirect) {
    //     return <Redirect to={loginStatus.redirect} push/>;
    // }
    //
    // const webviewVersion = getWebviewVersion();
    // const version = webviewVersion.split(",");

    return (
        // version && version.length > 0 && version[0] === "NoSystemWebView" && version[1] < MinVersionAndroid
        //     ?
        //     (<NotSupported/>)
        //     :
        //     <>
        //         <Helmet>
        //             {getMetaTags("common")}
        //         </Helmet>
        //         {getMobileLayout(props)}
        //         {(isLogin() || !(isInSadApp() || isInSadWeb())) && <FixedMenu key="FixedMenu"/>}
        //         <SideAlertDialog key={"SideAlertDialog"}/>
        //         <AndroidUpdateWebviewBar/>
        //         <ToastContainer
        //             position="bottom-center"
        //             autoClose={5000}
        //             newestOnTop={false}
        //             closeOnClick
        //             rtl
        //             pauseOnFocusLoss
        //             draggable
        //             pauseOnHover
        //             hideProgressBar
        //             limit={2}
        //         />
        //     </>

        <div className={classes.App}>
            {/*<Layout>*/}
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

            {/*</Layout>*/}
        </div>
    );

};

// const mapStateToProps = state => {
//     return {
//         commonState: state.data.common
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         uiActions: bindActionCreators(uiIndexActions, dispatch),
//         dataChargeActions: bindActionCreators(dataChargeActions, dispatch),
//         dataInternetActions: bindActionCreators(dataInternetActions, dispatch),
//         dataCommonActions: bindActionCreators(dataCommonActions, dispatch)
//     };
// };

export default
// withRouter(LoadingIndicator(NetworkDetector(connect
// (mapStateToProps, mapDispatchToProps)
// (
    Mobile
// ))))
;

