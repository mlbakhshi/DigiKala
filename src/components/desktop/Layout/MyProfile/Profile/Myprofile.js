import React, {useEffect, useState} from "react";
import classes from './Myprofile.module.scss';
import RightMenu from "./RightMenu/RightMenu";
import LeftMenu from "./LeftMenu/LeftMenu";
import Toolbar from "../../Header/toolbar/toolbar";
import Footer from "../../Footer/footer";
import {connect} from "react-redux";
import WaitingPayment from "./LeftMenu/WaitingPayment/WaitingPayment";
import Processing from "./LeftMenu/Processing/Processing";
import DeliverProcess from "./LeftMenu/DeliverProcess/DeliverProcess";
import {loginAuthSuccess} from "../../../../../redux/data/auth/actions";
import Login from "../../../Logn/Login";




const MyProfile=(props)=>{
    const {auth,userId}=props;
    const [leftMenu,setLeftMenu]=useState(0);


    const onclickLeftMenu=(event,index)=>{
        event.preventDefault()
        setLeftMenu(index)
    }

    const leftMenuItems=[
        {onClick:(event)=>{onclickLeftMenu(event,1)},children:"در انتظار پرداخت"},
        {onClick:(event)=>{onclickLeftMenu(event,2)},children:" در حال پردازش"},
        {onClick:(event)=>{onclickLeftMenu(event,3)},children:"تحویل شده"},
    ]
    let component;
    if(leftMenu===1){
        component=<WaitingPayment  />
    }
    else if(leftMenu===2){
        component=<Processing />
    }
    else if(leftMenu===3){
        component=<DeliverProcess />
    }

    if(auth){
        return(

            <div>
                <Toolbar/>

                <div className={classes.Cart}>
                    <aside className={classes.CartContainers}>
                        <RightMenu/>
                    </aside>
                    <section className={classes.CartBuy}>
                        <LeftMenu items={leftMenuItems} />
                        <section>
                            {component}
                        </section>
                    </section>

                </div>
                <Footer/>
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
    return {

        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        counter:state.data.cntOrder.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        // dispatching actions returned by action creators
        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
