import React, {useState} from "react";
import classes from './HamburgurMenu.module.scss';
import Hamburger from "./Hamburgur";
const HamburgurMenu=()=>{
    const [hamburgerOpen,setHamburgerOpen]=useState(false);
    const toggleHamburger=()=>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        <div>
            <div className={classes.Navigation}>
                <ul>
                    <li> Home</li>
                    <li> Home1</li>
                    <li> Home2</li>
                </ul>
                <div className={classes.Hamburgur} onClick={toggleHamburger}>
                    <Hamburger/>
                </div>
            </div>
        </div>
    )
}
export default HamburgurMenu;