import React, {useEffect} from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import "./../../assets/css/desktop/desktop.scss";
// import {checkLogin} from "../../common/helpers/authHelper";
// import LoadingIndicator from "../../common/components/loadingIndicator/loadingIndicator";
// import Helmet from "react-helmet";
// import {getMetaTags} from "../../common/constants/ceo";
// import {getDesktopLayout} from "../../common/helpers/layoutHelper";
import {bindActionCreators} from "redux";
// import {dataChargeActions} from "../../redux/data/charge";
// import {dataInternetActions} from "../../redux/data/internet";
// import {dataCommonActions} from "../../redux/data/common";
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import classes from "../../App.module.css";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import Main from "./Pages/main/main";
import Login from "./Logn/Login";

const Desktop = (props) => {

    // useEffect(() => {
    //
    //     props.dataChargeActions.clearChargeBuyProps();
    //     props.dataInternetActions.clearInternetBuyProps();
    //
    //     props.dataCommonActions.getSiteSettings();
    //
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // let loginStatus = checkLogin(props);

    // if (loginStatus.redirect) {
    //     return <Redirect to={loginStatus.redirect} push/>;
    // }

    return (
        <div className={classes.App}>
            {/*<Layout>*/}
            <BrowserRouter>
                <Switch>
                    <Route path="/detail" component={ProductDetail} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/" exact component={Main} />
                    <Route path="/Login" exact component={Login} />

                </Switch>
            </BrowserRouter>

            {/*</Layout>*/}
        </div>
    );

};

// const mapDispatchToProps = dispatch => {
//     return {
//         dataChargeActions: bindActionCreators(dataChargeActions, dispatch),
//         dataInternetActions: bindActionCreators(dataInternetActions, dispatch),
//         dataCommonActions: bindActionCreators(dataCommonActions, dispatch)
//     };
// };

export default
// withRouter(LoadingIndicator(connect
// (null, mapDispatchToProps)
// (
    Desktop
// )))
;

