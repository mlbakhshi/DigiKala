import React, { useState} from "react";
import classes from './Myprofile.module.scss';
import Toolbar from "../../Header/toolbar/toolbar";
import Footer from "../../Footer/footer";
import {connect} from "react-redux";
import {loginAuthSuccess} from "../../../../../redux/data/auth/actions";
import {WaitOrder} from "../../../../../redux/data/ordersCount/actions";
import Login from "../../../Logn/Login";
import TopSection from "./TopSection/TopSection";
import MiddlePic from "./MiddlePic/MiddlePic";
import BottomMenu from "../BottomMenu/BottomMenu";



const MyProfile=(props)=>{
    const {auth}=props;

    if(auth){
        return(

            <div>
                <Toolbar/>

                <div className={classes.Cart}>
                    <TopSection />
                    <MiddlePic />
                    <BottomMenu />
                    <Footer />

                </div>
            </div>
        )
    }
    else {
        return(
            <Login />
        )

    }

}


const mapStateToProps  = (state) => {
    console.log(state.auth);
    return {

        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        counter:state.data.cntOrder.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
   ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
        ACTION_Orders_SUCCESS: (data) => dispatch(WaitOrder(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
