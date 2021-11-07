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
import {AllOrders} from "../../../../../redux/data/auth/apiFunction";
import {loginAuthSuccess} from "../../../../../redux/data/auth/actions";
import {WaitOrder} from "../../../../../redux/data/ordersCount/actions";
import Login from "../../../Logn/Login";
import Account from "../Account/account";



const MyProfile=(props)=>{
    const {auth,userId,ACTION_Orders_SUCCESS}=props;
    const [leftMenu,setLeftMenu]=useState(0);
    const [id,setId]=useState();

    console.log(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(async ()=>{
    //     //fetch orders from DB
    //     let checkOrders=null;
    //
    //     try{
    //         checkOrders = await AllOrders(userId);
    //     }
    //     catch (e){
    //         console.log('Error')
    //     }
    //     if(checkOrders?.success===true){
    //     console.log(checkOrders);
    //         setId(checkOrders.data)
    //         console.log(id);
    //    console.log( ACTION_Orders_SUCCESS(checkOrders.data))
    //     }
    // },[]);

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
        component=<WaitingPayment />
    }
    else if(leftMenu===2){
        component=<Processing />
    }
    else if(leftMenu===3){
        component=<DeliverProcess />
    }

    console.log(auth);
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
    console.log(state.auth);
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
        ACTION_Orders_SUCCESS: (data) => dispatch(WaitOrder(data)),
        // reset: () => dispatch(reset()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
