import React from "react";
import classes from './SearchLoginBar.module.scss';
import Search from "./Search/search";
import Login from "./login/Login";

const SearchLoginBar=()=>{
    return(
        <div className={classes.SearchLoginBar}>
            <Search />
            <Login />
        </div>
    )
}
export default SearchLoginBar;