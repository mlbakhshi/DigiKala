import React from 'react';
import '../../../../assets/icon/style.css';
import classes from './search.module.css';
const Search=()=>{
    return(
        <div className={classes.Search}>
            <div >
                <span class="icon-search"></span>
            </div>
            <div >
                <input placeholder="جستجو در دیجی کالا..."/>
            </div>
        </div>
    )
}
export default Search;