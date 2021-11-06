import React  from "react";
import {connect} from "react-redux";
import {loginAuthSuccess, logoutAuthSuccess} from "../../../../../redux/data/auth/actions";
import {Redirect, useHistory} from "react-router-dom";
import {LogoutOrder} from "../../../../../redux/data/ordersCount/actions";


const Logout = (props) => {
    const { ACTION_logout_SUCCESS,ACTION_logout_ORDERS }  = props;
    ACTION_logout_SUCCESS();
    ACTION_logout_ORDERS();
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
        <div >
            <Redirect to="/" />
        </div>
    );

};

const mapDispatchToProps = dispatch => {
    return {
        ACTION_logout_SUCCESS: (data) => dispatch(logoutAuthSuccess(data)),
        ACTION_logout_ORDERS: (data) => dispatch(LogoutOrder(data)),
    };
};

export default   connect(null,mapDispatchToProps)(Logout);

