import React from 'react';
import NavigationItems from "../NavigationItems/navigationitems";
import TopBar from "../TopBar/topbar";
import classes from './header.module.css';

const Toolbar =(props)=>{
    return(
        <header className={classes.Header} >
            <div >
                <TopBar />
            </div>
            <nav className={classes.Toolbar}>
                <NavigationItems />
            </nav>
        </header>
    )
}
export default Toolbar;