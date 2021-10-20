import React from 'react';
import Logo from "../Logo/Logo";
import classes from './topBar.module.scss';
import Nav from "../HamburgurMenu/Nav";
const TopBar=()=>{
    return(
        <div className={classes.TopBar}>
            <div>
                <Nav />
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