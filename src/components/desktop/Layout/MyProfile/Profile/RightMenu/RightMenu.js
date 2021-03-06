//import useState hook to create menu collapse state
import React, { useState } from "react";
import { FaMobile, FaRegUser} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./RightMenu.module.scss";
import NavigationItem from "./Navigationitem/navigationitem";
import classes from './RightMenu.module.scss';

const RightMenu = () => {
    return (
<>
    <div style={{display:"flex",flexDirection:"row"}}>
        <ul className={classes.NavigationItems}>
            <NavigationItem  >
                <span className="icon-menu"></span>
                دیجی کلاب
            </NavigationItem>
            <NavigationItem link="/profile" >
                <FaMobile />
               <span>
                    سفارش های من
               </span>
            </NavigationItem>
            <NavigationItem link="/account" >
                <FaRegUser />
                <span>
                   اطلاعات حساب
                </span>

            </NavigationItem>
            <NavigationItem link="/logout" >
                <FiLogOut />
                <span>
                    خروج
                </span>
                </NavigationItem>

        </ul>
    </div>
        </>
    );
};

export default RightMenu;