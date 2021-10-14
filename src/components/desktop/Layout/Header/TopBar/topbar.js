import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/search";
import Login from "../login/Login";
import classes from './topBar.module.css';
const TopBar=()=>{
    return(
        <div className={classes.TopBar}>
            <div>
                <Logo />
            </div>
            <div style={{width:"40%"}}>
                <Search/>
            </div>
            <div style={{marginRight:"auto"}}>
                <Login />
            </div>
        </div>
    )
}
export default TopBar;