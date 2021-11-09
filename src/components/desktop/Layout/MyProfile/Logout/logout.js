import React  from "react";
import {connect} from "react-redux";
import {loginAuthSuccess, logoutAuthSuccess} from "../../../../../redux/data/auth/actions";
import {Redirect, useHistory} from "react-router-dom";
import {LogoutOrder} from "../../../../../redux/data/ordersCount/actions";


const Logout = (props) => {
    const { ACTION_logout_SUCCESS,ACTION_logout_ORDERS,auth }  = props;
    ACTION_logout_SUCCESS();
    ACTION_logout_ORDERS();

    return (
        <div >
            <Redirect to="/" />
        </div>
    );

};

const mapStateToProps  = (state) => {
    return {

        auth: state.data.auth.isLogin,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        ACTION_logout_SUCCESS: (data) => dispatch(logoutAuthSuccess(data)),
        ACTION_logout_ORDERS: (data) => dispatch(LogoutOrder(data)),
    };
};

export default   connect(mapStateToProps,mapDispatchToProps)(Logout);

