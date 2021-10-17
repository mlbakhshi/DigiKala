import React from 'react';
import '../../../../../assets/icon/style.css';
import classes from './search.module.scss';
const Search=()=>{
    return(
        <div className={classes.Search}>
            <div >
                <span class="icon-search"></span>
            </div>
            <div >
                <input style={{fontSize:"11px"}} placeholder="جستجو در دیجی کالا..."/>
            </div>
        </div>
    )
}
export default Search;