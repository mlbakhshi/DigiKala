import React from "react";
import {Link} from "react-router-dom";


const BottomMenu=(props)=>{

    return(
        <div >
            <Link to={"/MyOrders"}>
           <div style={{marginTop:"15px"}}>
               سفارش های من

          </div>
        </Link>
            <hr />
          <Link to={"/Account"} >
            <div>
               اطلاعات حساب
           </div>
          </Link>
        </div>
    )
}




export default (BottomMenu);
