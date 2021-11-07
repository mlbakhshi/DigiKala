import React from "react";
import classes from './BottomMenu.module.scss';
import {Link} from "react-router-dom";


const BottomMenu=(props)=>{

    return(
        <div className={classes.BottomMenu}>
            <Link to={"/MyOrders"}>
           <div style={{marginTop:"15px",display:"flex"}}>
               <div>
                   سفارش های من
               </div>
              <div className={classes.Sign}>
                  <i className='fa fa-angle-left'></i>

              </div>
          </div>
        </Link>
            <hr />
          <Link to={"/Account"} >
              <div style={{marginTop:"15px",display:"flex"}}>
                  <div>
اطلاعات حساب                  </div>
                  <div className={classes.Sign}>
                      <i className='fa fa-angle-left'></i>

                  </div>
              </div>
          </Link>
        </div>
    )
}




export default (BottomMenu);
