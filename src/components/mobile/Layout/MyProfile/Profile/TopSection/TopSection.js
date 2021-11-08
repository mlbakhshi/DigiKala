import React, { useState} from "react";
import classes from './TopSection.module.scss';
import {connect} from "react-redux";
import {loginAuthSuccess} from "../../../../../../redux/data/auth/actions";
import {WaitOrder} from "../../../../../../redux/data/ordersCount/actions";
import Login from "../../../../Logn/Login";
import { ReactComponent as YourSvg } from '../../../../../../assets/images/userImageDefault.svg';
import {Link, Redirect} from "react-router-dom";


const MyProfile=(props)=>{
    const {auth,userData}=props;

 if(auth){
        return(

            <div>
                <div className={classes.Cart}>
                    <div className={classes.UserPic}>
                        <div>
                            <YourSvg  />
                        </div>
                        <div className={classes.Info}>
                           <div className={classes.Name}>
                               {userData.FirstName}  {userData.LastName}
                           </div>
                            <div className={classes.Phone}>
                                {userData.PhoneNumber}
                           </div>
                        </div>
                    </div>
                    <div className={classes.BagCurrency}  >
                        <div >کیف پول</div>
                        <div >350 تومان</div>
                    </div>
                    <hr />
                    <div className={classes.BagCurrency} >
                        <div >
                            <span className="icon-Dg-club" ></span>
                            دیجی کلاب
                        </div>
                        <div >1040 امتیاز </div>
                    </div>

                    <hr/>
                    <div className={classes.Exit}>
                        <Link to={"/Logout"}>
                            خروج از حساب
                    </Link>
                    </div>
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
        userData:state.data.auth.userdata,
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
