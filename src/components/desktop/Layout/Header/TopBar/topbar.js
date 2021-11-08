import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/search";
import Login from "../login/Login";
import classes from './topBar.module.scss';
const TopBar=()=>{
    return(
        <div className={classes.TopBar}>
            <div>
                <Logo />
            </div>
            <div className={classes.Search} >
                <Search/>
            </div>
            <div className={classes.Login} >
                <Login />
            </div>
        </div>
    )
}
export default TopBar;