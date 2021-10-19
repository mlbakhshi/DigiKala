import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/search";
import Login from "../login/Login";
import classes from './topBar.module.scss';
import HamburgurMenu from "../HamburgurMenu/HamburgurMenu";
const TopBar=()=>{
    return(
        <div className={classes.TopBar}>
            <div>
                <HamburgurMenu />
            </div>
            <div style={{width:"30%"}}>
                <Logo />
            </div>
            <div className={classes.Question}>
                <i className="fa fa-question" ></i>
            </div>
        </div>
    )
}
export default TopBar;