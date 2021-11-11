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

            </div>
            <hr className={classes.Line}/>
           <div>
               <SearchLoginBar />

           </div>
            <hr className={classes.Line}/>
            <div>
                <Location />

            </div>
            <hr className={classes.Line2}/>
        </header>
    )
}
export default Toolbar;