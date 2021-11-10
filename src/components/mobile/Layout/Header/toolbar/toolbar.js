import React from 'react';
import TopBar from "../TopBar/topbar";
import classes from './header.module.scss';
import SearchLoginBar from "../SearchLoginBar/SearchLoginBar";
import Location from "../Location/location";

const Toolbar =(props)=>{
    return(
        <header className={classes.Header} >
            <div >
                <TopBar />
                <hr className={classes.Line}/>
            </div>
           <div>
               <SearchLoginBar />
               <hr className={classes.Line}/>
           </div>
            <div>
                <Location />
                <hr className={classes.Line}/>
            </div>
        </header>
    )
}
export default Toolbar;